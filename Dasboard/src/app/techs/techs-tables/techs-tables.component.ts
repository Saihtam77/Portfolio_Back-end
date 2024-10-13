import { Component } from '@angular/core';
import { Techs } from '../../Services/dataTypes';
import { TechsService } from '../../techs.service';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-techs-tables',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './techs-tables.component.html',
  styleUrl: './techs-tables.component.css',
})
export class TechsTablesComponent {
  techs: Techs[];
  error: string;

  constructor(private TechsService: TechsService) {
    this.TechsService.getTechs();
    this.TechsService.techs$.subscribe((techs) => {
      this.techs = techs;
    });
  }

  deleteTech(id: number, pic: string) {
    if (confirm('Are you sure you want to delete this tech?')) {
      this.TechsService.deleteTech(id);

      console.log('Tech deleted successfully');
    } else {
      this.error = 'Tech not found....';
    }
  }
}
