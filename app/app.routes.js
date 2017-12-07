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
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent, children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: employee_overview_component_1.EmployeeOverViewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map