import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';
import {map} from 'rxjs/operators'

@Injectable()

export class EmployeeService{
  myAppUrl: string = "";
  constructor(private _http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl; 
  }

  getCityList() {
    return this._http.get(this.myAppUrl + "api/Employee/GetCityList")
      .pipe(map((res: any) => res.json()))
      .subscribe(d => { console.log('a'); })
  }

  getEmployess() {
    return this._http.get(this.myAppUrl + 'api/Employee/Index').pipe(map((response: any) => response.json())).subscribe(d => {
      console.log('b');
    })

  }
  getEmployeeById(id: number) {
    //return this._http.get(this.myAppUrl + "api/Employee/Details/" + id).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  saveEmployee(employee) {
    
  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}

