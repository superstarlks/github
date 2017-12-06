import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    templateUrl: './app/main/home.component.html'
})
export class HomeComponent{
    constructor(private router: Router) {

    }

    GotoEmployee(){
        this.router.navigate(['employees']);
    }
}