import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employeeDetail: Employee = {};

  register() {
    this.registerService.saveData(this.employeeDetail);
  }
  constructor(private registerService: RegisterserviceService) { }

  ngOnInit(): void {
  }

}
