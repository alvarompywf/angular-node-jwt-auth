import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loginComponent } from 'login/src/lib/container/login.component';

@Component({
  standalone: true,
  imports: [loginComponent, NxWelcomeComponent, RouterModule],
  selector: 'ask-me-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
