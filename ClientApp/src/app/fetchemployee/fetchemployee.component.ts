import { Component, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service'

@Component({
  templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
  public empList: EmployeeData[];

  constructor(public http: HttpClientModule, private _router: Router, private _employeeService: EmployeeService) {
    this.getEmployees();
  }

  getEmployees() {
   /* this._employeeService.getEmployess().subscribe(
      data => this.empList = data
    )*/
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
