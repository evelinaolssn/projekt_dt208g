import { Injectable } from '@angular/core';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class StudyPlanService {
  private studyPlan: Course[] = [];

  constructor() { }

  getStudyPlan(): Course[] {
    return this.studyPlan;
  }
}
