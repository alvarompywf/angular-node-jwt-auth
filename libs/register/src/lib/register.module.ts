import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { registerRoutes } from './lib.routes';
import { RegisterComponent } from './register/container/register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterComponent,
    RouterModule.forChild(registerRoutes),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
