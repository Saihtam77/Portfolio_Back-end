import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TechsService } from '../../techs.service';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../file-upload.service';

@Component({
  selector: 'app-add-tech',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-tech.component.html',
  styleUrl: './add-tech.component.css',
})
export class AddTechComponent {
  techForm: FormGroup;

  validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  completeFile: File; // The unique file

  constructor(
    private fb: FormBuilder,
    private techService: TechsService,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {
    this.techForm = this.fb.group({
      name: ['', Validators.required],
      skillLevel: ['', Validators.required],
      pic: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    /**
     * @description This function is called when a file is selected in the file input
     * @param event - The event object that is triggered when a file is selected
     * @returns void
     */

    if (event.target.files.length > 0) {
      // check if a file is selected
      const file = event.target.files[0];

      // check if the file is an image
      if (!this.validImageTypes.includes(file.type)) {
        this.techForm.get('pic')!.setErrors({ invalidFileType: true });
        //clear the file input
        event.target.value = '';
        return;
      }
      // check if the file size is greater than 5MB
      if (file.size > 5242880) {
        this.techForm.get('pic')!.setErrors({ fileSizeExceeded: true });
        //clear the file input
        event.target.value = '';
        return;
      }
      this.completeFile = file;
      this.techForm.get('pic')!.setErrors(null); // Clear any previous errors
    }
  }

  uniqueFileName(file: File): File {
    const timestamp = new Date().getTime();

    const newName: string = `${timestamp}_${file.name}`;

    const newFile: File = new File([file], newName, {
      type: file.type,
    });
    
    return newFile;
  }

  onSubmit() {

    if (this.techForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    this.completeFile = this.uniqueFileName(this.completeFile); // Generate a unique file name



    //Server and image uplaoading part
    this.fileUploadService.uploadTechsFile(this.completeFile).subscribe(
      (response) => {
        console.log(response);
      },
    );

    //Database part
    this.techForm.get('pic')!.setValue(this.completeFile.name);

    this.techService.postTech(this.techForm.value);

    console.log(this.techForm.value);
    console.log('Form is valid');
  }
}
