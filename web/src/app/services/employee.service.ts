import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../interface/employee';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  SelectedEmployee: Employee;
  array: Employee[]; 

  readonly URL_API = "http://localhost:8285/api";

  constructor(
    private http: HttpClient
  ) {
    this.SelectedEmployee = new Employee();
  }

  GetEmployee() {
    return this.http.get(`${this.URL_API}/employee/list/all`);
  }

  PostEmployee(obj) {
    return this.http.post(`${this.URL_API}/employee/add`, obj);
  }

  PutEmployee(id_emp: string, data) {
    return this.http.put(`${this.URL_API}/employee/update/${id_emp}`, data);
  }

  DeleteEmployee(id_emp: string) {
    return this.http.delete(`${this.URL_API}/employee/delete/${id_emp}`);
  }
}
