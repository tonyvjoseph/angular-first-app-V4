import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import{EmployeeService} from '../employee-service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})

export class EmployeeViewComponent implements OnInit {

  employee:IEmployee;
  statusMessage:string = "Loading data, please wait.";

  constructor(private _employeeService: EmployeeService, 
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    //// using 'ActivatedRoute' service to retrieve out parameter value(parameter from the URL)
    let empCode:string = this._activatedRoute.snapshot.params['code'];

    this._employeeService.getEmployeeByCode(empCode)
            .subscribe(
                employeeData => {
                  if(employeeData==null){
                    this.statusMessage="Employee with the specified Employee Code does not exist";
                  }
                  else{
                    this.employee=employeeData;
                  }
                },
                error => {
                  this.statusMessage="Problem with service, try after sometime";
                  console.log(error);
                }
    )
  }

}
