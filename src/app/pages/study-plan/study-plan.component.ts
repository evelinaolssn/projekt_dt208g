import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudyPlanService } from '../../services/study-plan.service';
import { Course } from '../../course';
@Component({
  selector: 'app-study-plan',
  imports: [CommonModule],
  templateUrl: './study-plan.html',
  styleUrl: './study-plan.css'
})
export class StudyPlanComponent {

  /**
   * Connects the component to studyPlanService
   * @param studyPlanService Service that manage the study plan
   */
  constructor(private studyPlanService: StudyPlanService) { }

  /**
   * Retrieves courses from study plan service
   * @returns {Course[]} Array of courses in study plan
   */
  get studyPlan(): Course[] {
    return this.studyPlanService.getStudyPlan();
  }
}
