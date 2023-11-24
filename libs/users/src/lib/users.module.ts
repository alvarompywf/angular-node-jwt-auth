import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './container/users.component';

export const usersRoutes: Route[] = [
  {
    path: '',
    component: UserComponent,
  },
];

@NgModule({
  imports: [CommonModule, UserComponent, RouterModule.forChild(usersRoutes)],
  exports: [UserComponent],
})
export class UsersModule {}
