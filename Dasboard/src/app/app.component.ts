import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MenuToogleBtnComponent } from './navbar/menu-toogle-btn/menu-toogle-btn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsTableComponent } from './projects/projects-table/projects-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MenuToogleBtnComponent,
    ProjectsTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Dasboard';

  ngOnInit(): void {
    initFlowbite();
  }

  //navbartrigger
  isNavbarHidden = false;
  toggleNavbar() {
    this.isNavbarHidden = !this.isNavbarHidden;
  }
}
