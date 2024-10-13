import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {

  private techsUrl = 'http://localhost:3000/uploadTechs';
  private projectsUrl = 'http://localhost:3000/uploadProjects';

  constructor(private http: HttpClient) {}

  // Techs

  uploadTechsFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.techsUrl, formData);
  }

  getTechsFile(fileName: string): Observable<any> {
    return this.http.get(`${this.techsUrl}/${fileName}`);
  }


  // Projects

  uploadProjectsFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.projectsUrl, formData);
  }
}
