import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service';
import { Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './fetchemployee.component.html'
})
export class FetchEmployeeComponent {

  public empList: EmployeeData[];

  constructor(private _router: Router, public _employeeService: EmployeeService) {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployess().add(
      data => this.empList = data
    )
  }

  delete(employeeId) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeId);
    if (ans) {
      //this._employeeService.
    }
  }

}

interface EmployeeData {
  employeeId: number;
  name: string;
  gender: string;
  city: string;
  department: string;
}
