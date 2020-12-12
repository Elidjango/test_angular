import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { HeaderComponent } from './pages/shared/header/header.component';

import { EmployeeModule } from './pages/employee/employee.module';
import { LobbyModule } from './pages/lobby/lobby.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    EmployeeModule,
    LobbyModule
  ],
  providers: [NgbActiveModal, { provide: LocationStrategy, useClass: HashLocationStrategy }],

  bootstrap: [AppComponent]
})
export class AppModule { }
