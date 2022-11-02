import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private URL: string = "http://localhost:3000/employee";

  constructor(private httpClient: HttpClient) { }

  saveData(employeeData: Employee) {
    return this.httpClient.post(this.URL,employeeData);
  }
}
