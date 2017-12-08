import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
@Component({
    selector: 'home-component',
    templateUrl: './app/main/home.component.html'
})
export class HomeComponent {
    public token: string;
    public fullname: string;
    currentUser: User;
    constructor(private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    GotoEmployee(){
        this.router.navigate(['employees']);
    }
}