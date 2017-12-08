import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AlertService } from '../services/alert.service';
@Injectable()
export class AuthenticationService {
    private apiUrl = "http://192.168.1.184:8080/";
    constructor(private http: Http,private alertService: AlertService
    ) { }
    login(username: string, password: string) {
        const formData = new FormData();
        // append your data
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(this.apiUrl + "login", formData).map((response: Response) => {
            debugger;
            if (response.json().status == true) {
                console.log("status" + response.json().status);
                localStorage.setItem('currentUser', JSON.stringify(response.json().data));
            }else{
                console.log("status" + response.json().status);
            }    
        });
        // .catch(this.handleFullError);
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    handleFullError(error: Response) {
        return Observable.throw(error);
    }

    handleError(error: Response): Observable<any> {
        let errorMessage = error.json();
        console.error(errorMessage);
        return Observable.throw(errorMessage.error || 'Server error');
    }
}