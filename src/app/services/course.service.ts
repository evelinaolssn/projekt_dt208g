import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../course';

/**
 * Service for fetching course data from JSON-file
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  /**  JSON-file with course data*/
  private url: string = './miun_courses.json'

  constructor(private http: HttpClient) { }

  /**
   * Fetches courses from JSON-file
   * @returns Observable with an array of course objects
   */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
  }
}
