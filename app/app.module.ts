import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { EmployeeDetailComponent } from './main/employee-detail.component';
import { EmployeeOverViewComponent } from './main/employee-overview.component';
import { EmployeeProjectsComponent } from './main/employee-projects.component';
import { HomeComponent } from './main/home.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './main/login.component';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import {CheckSaveFormGuard} from './guards/check-save-form.guard';
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
      LoginComponent
    ],
  providers: [EmployeeService, LoginService, CheckLoginGuard,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
