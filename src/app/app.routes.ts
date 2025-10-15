import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudyPlanComponent } from './pages/study-plan/study-plan.component';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'study-plan', component: StudyPlanComponent },
];
