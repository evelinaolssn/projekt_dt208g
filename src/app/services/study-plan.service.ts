import { Injectable } from '@angular/core';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class StudyPlanService {
  private studyPlan: Course[] = [];

  constructor() { }

  /**
   * Retrieves the current study plan
   * @returns {Course[]} Array of courses in the study plan
   */
  getStudyPlan(): Course[] {
    return this.studyPlan;
  }

  /**
   * Adds course to study plan if it does not already exist
   * @param course Added course
   * @returns {boolean} True if the course was successfully added, false if it already exists
   */
  addCourse(course: Course): boolean {
    if (!this.studyPlan.find(c => c.courseCode === course.courseCode)) {
      this.studyPlan.push(course);
      return true;
    }
    return false;
  }

  /**
   * Removes course from studyplan array
   * @param course Removed course
   */
  removeCourse(course: Course): void {
    this.studyPlan = this.studyPlan.filter(c => c.courseCode !== course.courseCode)
  }
}
