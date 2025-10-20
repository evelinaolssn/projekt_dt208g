import { Injectable } from '@angular/core';
import { Course } from '../course';

/**
 * Service for managing study plan and save/load from localStorage
 */
@Injectable({
  providedIn: 'root'
})
export class StudyPlanService {
  private studyPlan: Course[] = [];

  constructor() {
    this.loadStudyPlan();
  }

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
      this.saveStudyPlan();
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
    this.saveStudyPlan();
  }

  /**
   * Calculates totat points of courses in study plan 
   * @returns {number} Sum of points from all courses
   */
  getPoints(): number {
    return this.studyPlan.reduce((sum, course) => sum + course.points, 0);
  }

  /**
   * Saves current study plan to localStorage
   */
  private saveStudyPlan(): void {
    localStorage.setItem("studyPlan", JSON.stringify(this.studyPlan));
  }

  /**
   * Loads studyplan from localStorage 
   */
  private loadStudyPlan(): void {
    const data = localStorage.getItem("studyPlan");
    if (data) {
      this.studyPlan = JSON.parse(data);
    }
  }
}
