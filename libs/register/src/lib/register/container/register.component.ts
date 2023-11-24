import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { RegisterData } from '../models/register';
import { RegisterService } from '../services/register.service';
import { Md5 } from 'ts-md5/dist/esm/md5';

@Component({
  selector: 'ask-me-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterLink,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  formNames = this.generateFormNames();
  formMail = this.generateFormMail();
  formPassword = this.generateFormPassword();
  tabIndex = 0;
  progressBar = 0;
  registerButton = false;
  hideRegisterButton = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private registerService: RegisterService,
    private router: Router
  ) {}

  generateFormNames(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
    });
  }

  generateFormMail(): FormGroup {
    return this.fb.group({
      email: [null, Validators.required],
      numberPhone: null,
    });
  }
  generateFormPassword(): FormGroup {
    return this.fb.group({
      password: [null, Validators.required],
      repeatPassword: [null, Validators.required],
    });
  }

  onRegister(form: RegisterData): void {
    const md5 = new Md5();
    const password = md5.appendStr(form.password).end() as string;

    this.loading = true;

    this.registerService
      .register({ ...form, password: password })
      .pipe(
        tap((accessData) => {
          this.loading = false;
          localStorage.setItem('access_token', accessData.token);
          setTimeout(() => {
            this.router.navigate(['users']);
          }, 1000);

          this.cdr.markForCheck();
        }),
        catchError((err) => {
          console.log(2);
          this.loading = false;
          this.cdr.markForCheck();
          return err;
        })
      )
      .subscribe(() => {
        console.log('registrado el usuario');
      });
  }

  onNextTab() {
    console.log('this.tabIndex', this.tabIndex);
    switch (this.tabIndex) {
      case 0:
        this.checkFormsValidators(this.formNames);
        break;
      case 1:
        this.checkFormsValidators(this.formMail);
        break;
      case 2:
        this.checkFormsValidators(this.formPassword);
        if (this.formPassword.valid) {
          this.hideRegisterButton = true;
          this.onRegister({
            ...this.formNames.value,
            ...this.formMail.value,
            ...this.formPassword.value,
          });
        }
        break;
    }
  }

  checkFormsValidators(form: FormGroup<any>) {
    if (form.valid) {
      this.tabIndex++;
      this.progressBar = this.progressBar + 33.3;
    } else {
      form.markAllAsTouched();
    }
  }

  redirectToUsers(): void {
    setTimeout(() => {
      console.log('redirecto to users');
    }, 3000);
  }
}
