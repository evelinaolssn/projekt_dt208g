import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent {

}
