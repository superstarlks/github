"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./main/employee-detail.component");
var employee_overview_component_1 = require("./main/employee-overview.component");
var employee_projects_component_1 = require("./main/employee-projects.component");
var employee_edit_component_1 = require("./main/employee-edit.component");
var employee_add_component_1 = require("./main/employee-add.component");
var home_component_1 = require("./main/home.component");
var employee_service_1 = require("./services/employee.service");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var notfound_component_1 = require("./notfound.component");
var login_component_1 = require("./main/login.component");
var login_service_1 = require("./services/login.service");
var check_login_guard_1 = require("./guards/check-login.guard");
var check_save_form_guard_1 = require("./guards/check-save-form.guard");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.appRoutes],
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeListComponent,
                home_component_1.HomeComponent,
                notfound_component_1.NotFoundComponent,
                employee_detail_component_1.EmployeeDetailComponent,
                employee_overview_component_1.EmployeeOverViewComponent,
                employee_projects_component_1.EmployeeProjectsComponent,
                employee_edit_component_1.EmployeeEditComponent,
                employee_add_component_1.EmployeeAddComponent,
                login_component_1.LoginComponent
            ],
            providers: [employee_service_1.EmployeeService, login_service_1.LoginService, check_login_guard_1.CheckLoginGuard, check_save_form_guard_1.CheckSaveFormGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map