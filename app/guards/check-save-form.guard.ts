import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeDetailComponent } from '../main/employee-detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {
    canDeactivate(component: EmployeeDetailComponent) {
        alert('Vui lòng lưu trước khi thoát khỏi trang!');
        return false;
    }
}