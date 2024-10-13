import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../Services/project.service';
@Component({
  selector: 'app-add-projet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-projet.component.html',
  styleUrl: './add-projet.component.css',
})
export class AddProjetComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private projectService:ProjectService ) {}

  ngOnInit(): void {
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

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectService.postProject(this.projectForm.value);
    }
  }
}
