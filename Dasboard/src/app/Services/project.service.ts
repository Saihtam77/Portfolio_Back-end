import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './dataTypes';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = 'http://localhost:3000/projects';

  projectSubject = new BehaviorSubject<Project[]>([]);
  projects$ = this.projectSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProjects() {
    this.http.get<Project[]>(this.url).subscribe((projects) => {
      this.projectSubject.next(projects);
    });
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/${id}`);
  }

  postProject(project: Project) {
    this.http.post(this.url, project).subscribe(() => {
      this.getProjects();
    });
  }

  updateProject(project: Project) {
    this.http.put(`${this.url}/${project.id}`, project).subscribe(() => {
      this.getProjects();
    });
  }

  deleteProject(id: number) {
    try {
      this.http.delete(`${this.url}/${id}`).subscribe(() => {
        this.getProjects();
      });
    } catch (error) {
      console.error(error);
    }
  }
}
