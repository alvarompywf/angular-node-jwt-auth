import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ask-me-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: `login.component.html`,
  styleUrls: [`login.component.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class loginComponent {
  form = this.generateForm();

  constructor(private fb: FormBuilder) {}

  generateForm(): FormGroup {
    const form = this.fb.group({
      name: [null, Validators.required],
      password: [null, Validators.required],
    });
    return form;
  }
}
