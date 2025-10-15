import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../course';
import { CourseService } from '../../services/course.service';

/**
 * Component for displaying courses from JSON data
 * Fetches courses from CourseService 
 */
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  /**
   * Connects the component to CourseService
   * @param courseService Service for fetching courses
   */
  constructor(private courseService: CourseService) { }

  /** Subscribes to the service to fetch courses*/
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    })
  }
}
