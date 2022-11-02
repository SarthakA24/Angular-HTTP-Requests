import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterserviceService) { }

  employeeDetail: Employee = {};
  employeeData: Employee[] = [];
  empId: number = 0;
  empIdToUpdate: number = 0;
  employeeToUpdate: Employee = {};

  register() {
    this.registerService.saveData(this.employeeDetail).subscribe({
      next(x) {
        alert("Data Added");
      }, error(x) {
        alert("Error");
      }
    });
  }

  fetch() {
    this.registerService.fetchData().subscribe(empData => {
      this.employeeData = empData;
    });
  }

  deleteData() {
    this.registerService.deleteData(this.empId).subscribe({
      next(x) {
        alert("Data Deleted!");
      }, error(x) {
        alert("Error!");
      }
    });
  }

  fetchEmpData(){
    this.employeeToUpdate = this.employeeData.filter(employee => employee.id == this.empIdToUpdate)[0];
  }

  updateData() {
    this.registerService.updateData(this.employeeToUpdate).subscribe({
      next(x) {
        alert("Data Updated!");
      }, error(x) {
        alert("Error!");
      }
    });
  }

  ngOnInit(): void {
    this.fetch();
  }

}
