import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { EmployeeService } from '../services/employee.service'
@Component({
    selector: 'employee-edit-component',
    templateUrl: './app/main/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit,OnDestroy{
    public _id:number;
    public subscription:any;
    public employee:any; //khai báo biến giống tên ngoài trang emp detail
    constructor(
        private router: Router, 
        private activatedRoute : ActivatedRoute,
        public employeeService: EmployeeService
    ) 
    {

    }
    ngOnInit(){
        //get param trên url đưa vào subscription
        this.subscription = this.activatedRoute.params.subscribe(params=>{
            this._id = params['id']; //param id
        });
        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
        });
    }
    GotoEmployee(){
        this.router.navigate(['employees']);
    }
    SaveForm() {
        this.employeeService.Update(this._id, this.employee).subscribe(response => {
            console.log('response',response);
            if (response) {
                alert('Cập nhật thành công!');
                this.router.navigate(['/employees']);
            }
        })
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}