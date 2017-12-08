import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './main/employee-detail.component';

import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './main/login.component';
import { EmployeeOverViewComponent } from './main/employee-overview.component';
import { EmployeeProjectsComponent } from './main/employee-projects.component';
import { EmployeeEditComponent } from './main/employee-edit.component';
import { EmployeeAddComponent } from './main/employee-add.component';
import { AuthGuard } from './guards/auth.guard';
const routing: Routes = [
    { path: '', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: 'employees', component: EmployeeListComponent ,canActivate: [AuthGuard]},
    { path: 'employee-edit/:id', component: EmployeeEditComponent },
    { path: 'employee-add', component: EmployeeAddComponent },    
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverViewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);