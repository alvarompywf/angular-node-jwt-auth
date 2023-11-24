import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { Md5 } from 'ts-md5/dist/esm/md5';
import { LoginService } from './services/login.service';

@Component({
  selector: 'ask-me-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterLink,
  ],
  templateUrl: `login.component.html`,
  styleUrls: [`login.component.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class loginComponent {
  form = this.generateForm();

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  generateForm(): FormGroup {
    const form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    return form;
  }

  onLogin(): void {
    if (this.form.valid) {
      const md5 = new Md5();
      const password = md5.appendStr(this.form.value.password).end();
      const formData = { email: this.form.value.email, password };
      this.loginService
        .login(formData)
        .pipe(
          tap((data) => {
            this._snackBar.open('Correctamente', 'X', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });

            localStorage.setItem('access_token', data.token);
            console.log('login y token guardado');
            this.router.navigate(['users']);
          }),
          catchError((err) => {
            this._snackBar.open('Contraseña incorrecta', 'X', {
              horizontalPosition: 'end',
              verticalPosition: 'top',
            });
            return err;
          })
        )
        .subscribe();
    } else {
      this._snackBar.open('Todos los campos obligatorios', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }
}
