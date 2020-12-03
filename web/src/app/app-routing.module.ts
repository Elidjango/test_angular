import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LobbyComponent } from './pages/lobby/lobby.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Web/Lobby',
    pathMatch: 'full'
  },
  {
    path: 'Web/Lobby',
    component: LobbyComponent
  },
  {
    path: 'Web/Employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
