import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './main/employee-detail.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './main/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail/:id', component: EmployeeDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);