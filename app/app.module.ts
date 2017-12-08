import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { EmployeeDetailComponent } from './main/employee-detail.component';
import { EmployeeOverViewComponent } from './main/employee-overview.component';
import { EmployeeProjectsComponent } from './main/employee-projects.component';
import { EmployeeEditComponent } from './main/employee-edit.component';
import { EmployeeAddComponent } from './main/employee-add.component';
import { HomeComponent } from './main/home.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './main/login.component';

import { AlertComponent } from './directive/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
    [
      AppComponent,
      EmployeeListComponent,
      HomeComponent,
      NotFoundComponent,      
      EmployeeDetailComponent,
      EmployeeOverViewComponent,
      EmployeeProjectsComponent,
      EmployeeEditComponent,
      EmployeeAddComponent,
      LoginComponent
    ],
  providers: [EmployeeService,
    AuthGuard,
    AlertService,
    AuthenticationService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
