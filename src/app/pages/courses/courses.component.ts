import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../course';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';
import { Levels } from '../../level';
import { StudyPlanService } from '../../services/study-plan.service';

/**
 * Component for displaying courses from JSON data
 * Fetches courses from CourseService 
 * Filtering and sorting functionalities based on user input
 */
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})

export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  searchField: string = '';

  subjects: string[] = [];
  selectSubject: string = 'Alla ämnen';

  /**
   * Levels of courses is false as default
   */
  selectLevels: Levels = {
    GR: false,
    AV: false,
    BE: false,
    FO: false,
    X: false
  };

  /**
   * Connects the component to CourseService
   * @param courseService Service for fetching courses
   */
  constructor(private courseService: CourseService, private studyPlanService: StudyPlanService) { }

  /** 
   * Subscribes to the service to fetch courses
   * Collects unique subjects from dropdown
  */
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;

      this.subjects = Array.from(new Set(this.courses.map(c => c.subject))).sort();

      const levels = Array.from(new Set(this.courses.map(c => c.level)));
    })
  }

  /**
   * Attempts to add course to the study plan using StudyPlanService 
   * Alert if course is already added 
   * @param course The added course
   */
  addToPlan(course: Course): void {
    if (this.studyPlanService.addCourse(course)) {
    } else {
      alert(`${course.courseName} (${course.courseCode}) är redan tillagd i ditt ramschema.`)
    }
  }

  /** Sorts data by course code */
  sortByCourseCode(): void {
    this.courses.sort((a, b) => a.courseCode.localeCompare(b.courseCode));
  }

  /** Sorts data by course name */
  sortByCourseName(): void {
    this.courses.sort((a, b) => a.courseName.localeCompare(b.courseName));
  }

  /** Sorts data by course points */
  sortByPoints(): void {
    this.courses.sort((a, b) => a.points - b.points);
  }

  /** Sorts data by course subject */
  sortBySubject(): void {
    this.courses.sort((a, b) => a.subject.localeCompare(b.subject));
  }

  /**
   * Filters courses based on searchinput
   * Matches if input is found in course code or course name
   * All course levels are included as default
   * Filters courses if level is selected by user
   * @returns Filtered array of courses
   */
  get filteredCourses(): Course[] {
    const noLevelSelected =
      !this.selectLevels.GR &&
      !this.selectLevels.AV &&
      !this.selectLevels.BE &&
      !this.selectLevels.FO &&
      !this.selectLevels.X;

    return this.courses.filter(course =>
      (course.courseCode.toLowerCase().includes(this.searchField.toLowerCase()) ||
        course.courseName.toLowerCase().includes(this.searchField.toLowerCase())) &&
      (this.selectSubject === 'Alla ämnen' || course.subject === this.selectSubject) &&
      (noLevelSelected || this.selectLevels[course.level as keyof Levels])
    );
  }

  /**
   * Checks number of courses based on filtered result
   * @returns {number}
   */
  get courseNumber(): number {
    return this.filteredCourses.length;
  }
}
