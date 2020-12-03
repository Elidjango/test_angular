import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";

import * as moment from 'moment';
import * as Swal from 'sweetalert2';
import { Employee } from '../../interface/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  listEmp: any = [];
  btnDisabled = false;
  textButton = "Save";
  ShowToast = false;
  TitleToast = "";
  MessageToast = "";

  constructor(
    public employeeService: EmployeeService,
    private _EmployeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  FormatDate(date) {
    return moment(date).format("dddd DD, YYYY - h:mm a");
  }

  clearForm(form?: NgForm) {
    if (form) {
      form.reset();
      this._EmployeeService.SelectedEmployee = new Employee();
      this.textButton = "Save";
    }
  }

  AddEmployee(form: NgForm) {
    let obj = {
      position: form.value.position_usu,
      age: form.value.age_usu,
      username: form.value.username_usu,
    }

    if (form.value.position_usu === "") {
      this.TitleToast = "Error";
      this.MessageToast = "The name of the work is empty, please complete the field.";
      this.ShowToast = true;

      setTimeout(() => {
        this.TitleToast = "";
        this.MessageToast = "";
        this.ShowToast = false;
      }, 3500);

      return false;
    }

    if (form.value.age_usu === "") {
      this.TitleToast = "Error";
      this.MessageToast = "Age is mandatory, please complete the field.";
      this.ShowToast = true;

      setTimeout(() => {
        this.TitleToast = "";
        this.MessageToast = "";
        this.ShowToast = false;
      }, 3500);

      return false;
    }

    if (form.value.username_usu === "") {
      this.TitleToast = "Error";
      this.MessageToast = "The username is empty, please complete the field.";
      this.ShowToast = true;

      setTimeout(() => {
        this.TitleToast = "";
        this.MessageToast = "";
        this.ShowToast = false;
      }, 3500);

      return false;
    }

    if (form.value.position_usu != "" && form.value.age_usu != "" && form.value.username_usu != "") {
      console.log("Is works valid!");
      if (form.value.id_usu != "") {
        obj["date_update"] = moment(new Date()).format("DD-MM-YYYY HH:mm");
        
        this._EmployeeService.PutEmployee(form.value.id_usu, obj).subscribe(res => {
          this.clearForm(form);
          this.btnDisabled = false;
          this.TitleToast = "Success";
          this.MessageToast = "The employee was updated successfully.";
          this.ShowToast = true;
          this.textButton = "Save";
          this.getEmployee();
    
          setTimeout(() => {
            this.TitleToast = "";
            this.MessageToast = "";
            this.ShowToast = false;
          }, 2500);
        });
      } else {
        obj["date_create"] = moment(new Date()).format("DD-MM-YYYY HH:mm");
        obj["date_update"] = moment(new Date()).format("DD-MM-YYYY HH:mm");
  
        this._EmployeeService.PostEmployee(obj).subscribe(res => {
          this.clearForm(form);
          this.getEmployee();
        });
      }
    }
  }

  getEmployee() {
    this._EmployeeService.GetEmployee().subscribe(res => {
      this._EmployeeService.array = res as Employee[];
      this.listEmp = res as Employee[];

      this.listEmp.sort((a, b) => {
        if (a.date_update > b.date_update) {
          return -1;
        }
      });
    });
  }

  UpdateEmployee(emp) {
    this._EmployeeService.SelectedEmployee = emp;
    this.textButton = "Update";
  }

  DeleteEmployee(emp) {
    if (emp.id_usu != "" || emp.id_usu != undefined || emp.id_usu != null) {
      Swal.fire({
        title: 'Are you sure you want to delete this record?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          this._EmployeeService.DeleteEmployee(emp.id_usu).subscribe(res => {
            this.getEmployee();
            Swal.fire('Delete success', '', 'success');
          });
        }
      })
    }
  }
}
