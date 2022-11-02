import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  URL: string = "http://localhost:3000/employee/";

  constructor(private httpClient: HttpClient) { }

  saveData(employeeData: Employee) {
    return this.httpClient.post(this.URL, employeeData);
  }

  fetchData(): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(this.URL);
  }

  deleteData(empId: number) {
    return this.httpClient.delete(this.URL + empId);
  }

  updateData(employeeData: Employee) {
    return this.httpClient.put(this.URL,employeeData);
  }
}
