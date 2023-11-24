import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponent } from './container/login.component';
import { Route, RouterModule } from '@angular/router';

export const loginRoutes: Route[] = [
  {
    path: '',
    component: loginComponent,
  },
];

@NgModule({
  imports: [CommonModule, loginComponent, RouterModule.forChild(loginRoutes)],
  exports: [loginComponent],
})
export class LoginModule {}
