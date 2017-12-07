import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages:number[]; //mảng phân trang
    public currentPage:number;
    public keyword:string;
    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRouter: ActivatedRoute

    ) {

    }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params=>{
            this.currentPage=params['pageNo'] || 1; //nếu null thì là 1
            // console.log(this.currentPage);
            // console.log(params['filter']);
        });
        this.LoadData();
        this.pages=[1,2,3,4,5];
    }

    Delete(id:number){
        let confirmResult = confirm("Bạn thật sự muốn xóa?");
        if(confirmResult){
            this.employeeService.Delete(id).subscribe(response=>{
                if(response){
                    alert("Xóa thành công!");
                    this.LoadData();
                }
            })
        }
    }

    //lấy dữ liệu
    LoadData(){
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            // console.log(response);
        }, error => {
            console.log(error);
        });
    }

    //tìm kiếm
    Search(){
        this.employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
            // console.log(response);
        }, error => {
            console.log(error);
        });
    }

}