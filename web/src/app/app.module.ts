import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/components/nav/nav.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { EmployeeComponent } from './pages/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LobbyComponent,
    EmployeeComponent,
  ],
  imports: [
    IvyCarouselModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [NgbActiveModal, { provide: LocationStrategy, useClass: HashLocationStrategy }],

  bootstrap: [AppComponent]
})
export class AppModule { }
