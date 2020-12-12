import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import * as moment from "moment";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  listEmp: any = [];

  constructor(
    private _EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void { this.getEmployee() }

  getEmployee() {
    this._EmployeeService.GetEmployee().subscribe(res => {
      this.listEmp = res;

      this.listEmp.sort((a, b) => {
        if (a.date_update > b.date_update) {
          return -1;
        }
      });
    });
  }
}
