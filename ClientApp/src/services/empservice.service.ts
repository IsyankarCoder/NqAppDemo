import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Readable } from 'stream';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';


@Injectable()
export class EmployeeService{
  myAppUrl: string = "";
  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl; 
  }

  getCityList() {
    return this._http.get(this.myAppUrl + "api/Employee/GetCityList").map(res => res.json()).catch(this.errorHandler);
  }

  getEmployess() {
    return this._http.get(this.myAppUrl + 'api/Employee/Index').map((response: Response) => response.json()).catch(this.errorHandler);
  }
  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/Details/" + id).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  saveEmployee(employee) {
    
  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
