import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../Services/project.service';
import { Project } from '../../Services/dataTypes';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css',
})
export class EditProjectComponent implements OnInit {
  projectForm: FormGroup;
  project: Project;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ProjectService
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      desc: ['', Validators.required],
      intro: ['', Validators.required],
      link: ['', Validators.required],
      pic1: ['', Validators.required],
      pic2: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getProjectById(this.id).subscribe((project) => {
      this.project = project;
      this.projectForm.patchValue(project);
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.service.updateProject({
        ...this.project,
        ...this.projectForm.value,
      });
    }
  }
}
