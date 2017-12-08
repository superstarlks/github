"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var alert_service_1 = require("../services/alert.service");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, alertService) {
        this.http = http;
        this.alertService = alertService;
        this.apiUrl = "http://192.168.1.184:8080/";
    }
    AuthenticationService.prototype.login = function (username, password) {
        var formData = new FormData();
        // append your data
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(this.apiUrl + "login", formData).map(function (response) {
            debugger;
            if (response.json().status == true) {
                console.log("status" + response.json().status);
                localStorage.setItem('currentUser', JSON.stringify(response.json().data));
            }
            else {
                console.log("status" + response.json().status);
            }
        });
        // .catch(this.handleFullError);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.handleFullError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    AuthenticationService.prototype.handleError = function (error) {
        var errorMessage = error.json();
        console.error(errorMessage);
        return Observable_1.Observable.throw(errorMessage.error || 'Server error');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, alert_service_1.AlertService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map