import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby.component';

import { MomentPipe } from "../../pipes/moment.pipe"

@NgModule({
  declarations: [
    MomentPipe,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LobbyModule { }
