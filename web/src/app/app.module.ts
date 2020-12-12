import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { HeaderComponent } from './pages/shared/header/header.component';

import { EmployeeModule } from './pages/employee/employee.module';
import { LobbyModule } from './pages/lobby/lobby.module';

// -> Pipes
import { MomentPipe } from "./pipes/moment.pipe";

import localEs from "@angular/common/locales/es";
import { DomsecurityPipe } from './pipes/domsecurity.pipe';
import { ShowAndHidePassPipe } from './pipes/show-and-hide-pass.pipe';
let lenguaje = "es";
registerLocaleData(localEs);

@NgModule({
  declarations: [
    MomentPipe,
    AppComponent,
    NavComponent,
    HeaderComponent,
    DomsecurityPipe,
    ShowAndHidePassPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    EmployeeModule,
    LobbyModule,
    MomentPipe
  ],
  exports: [
    MomentPipe
  ],
  providers: [NgbActiveModal, {
    provide: LocationStrategy && LOCALE_ID,
    useValue: lenguaje,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
