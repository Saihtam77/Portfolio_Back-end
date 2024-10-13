import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Techs } from './Services/dataTypes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TechsService {
  url = 'http://localhost:3000/Techs';

  techsSubject = new BehaviorSubject<Techs[]>([]);
  techs$ = this.techsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTechs() {
    try {
      this.http.get<Techs[]>(this.url).subscribe((techs) => {
        this.techsSubject.next(techs);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getTechById(id: number) {
    try {
      return this.http.get<Techs>(`${this.url}/${id}`);
    } catch (error) {
      console.error(error);
    }
    return 'Tech not found....';
  }

  postTech(tech: Techs) {
    try {
      this.http.post(this.url, tech).subscribe(() => {
        this.getTechs();
      });
    } catch (error) {
      console.error(error);
    }
  }

  updateTech(tech: Techs) {
    try {
      this.http.put(`${this.url}/${tech.id}`, tech).subscribe(() => {
        this.getTechs();
      });
    } catch (error) {
      console.error(error);
    }
  }

  deleteTech(id: number) {
    try {
      this.http.delete(`${this.url}/${id}`).subscribe(() => {
        this.getTechs();
      });
    } catch (error) {
      console.error(error);
    }
  }
}
