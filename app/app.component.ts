import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './model/user.model';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
    // currentUser: User;
    public currentUser:any;
    constructor(private router: Router
    ) {
        
    }

    ngOnInit(){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log('currentUser' + this.currentUser);
    }
}