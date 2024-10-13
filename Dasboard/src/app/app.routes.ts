import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'Dashboard/ProjetTables', pathMatch: 'full'},
    {path: 'Dashboard/ProjetTables', loadComponent: () => import('./projects/projects-table/projects-table.component').then(m => m.ProjectsTableComponent)},
    {path:'Dashboard/AddProjet', loadComponent: () => import('./projects/add-projet/add-projet.component').then(m => m.AddProjetComponent)},
    {path:'Dashboard/EditProject/:id', loadComponent: () => import('./projects/edit-project/edit-project.component').then(m => m.EditProjectComponent)},
    
    {path:'Dashboard/TechsTables', loadComponent: () => import('./techs/techs-tables/techs-tables.component').then(m => m.TechsTablesComponent)},
    {path:'Dashboard/AddTech', loadComponent: () => import('./techs/add-tech/add-tech.component').then(m => m.AddTechComponent)},
    {path:'Dashboard/EditTech/:id', loadComponent: () => import('./techs/edit-tech/edit-tech.component').then(m => m.EditTechComponent)},
];
