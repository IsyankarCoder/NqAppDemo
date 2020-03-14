import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'

@Component({
  templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
  public empList: EmployeeData[];

  constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployess().subscribe(
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
