import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any = [];
  @Input() textButton: string;

  @Output() DataSelectedUpdate: EventEmitter<{}>
  @Output() DataSelectedDelete: EventEmitter<{}>

  p: number = 1;
  pageSize: number = 5;

  constructor() {
    this.DataSelectedUpdate = new EventEmitter();
    this.DataSelectedDelete = new EventEmitter();
  }

  ngOnInit(): void {}

  _update(obj: any) {
    this.DataSelectedUpdate.emit(obj);
  }

  _delete(obj: any) {
    this.DataSelectedDelete.emit(obj);
  }
}
