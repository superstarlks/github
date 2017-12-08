"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./main/home.component");
var employee_component_1 = require("./employee.component");
var employee_detail_component_1 = require("./main/employee-detail.component");
var notfound_component_1 = require("./notfound.component");
var login_component_1 = require("./main/login.component");
var employee_overview_component_1 = require("./main/employee-overview.component");
var employee_projects_component_1 = require("./main/employee-projects.component");
var employee_edit_component_1 = require("./main/employee-edit.component");
var employee_add_component_1 = require("./main/employee-add.component");
var auth_guard_1 = require("./guards/auth.guard");
var routing = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'employee-edit/:id', component: employee_edit_component_1.EmployeeEditComponent },
    { path: 'employee-add', component: employee_add_component_1.EmployeeAddComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: employee_overview_component_1.EmployeeOverViewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent }
        ]
    },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map