import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ProjectService } from '../../Services/project.service';
import { Project } from '../../Services/dataTypes';

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-table.component.html',
  styleUrl: './projects-table.component.css',
})
export class ProjectsTableComponent {
  projects: Project[];

  constructor(private projectServices: ProjectService) {
    this.projectServices.getProjects();
    this.projectServices.projects$.subscribe((projects) => {
      this.projects = projects;
    });
  }

  deleteProject(id: number) {
    this.projectServices.deleteProject(id);
    if (this.projects)
      this.projects = this.projects.filter((project) => project.id !== id);
  }
}
