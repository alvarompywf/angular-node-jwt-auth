import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ask-me-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `nx-welcome.component.html`,
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
