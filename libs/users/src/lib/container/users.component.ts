import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { user } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'ask-me-users',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  users$: Observable<user[]>;

  constructor(private usersService: UsersService, private router: Router) {
    this.users$ = this.usersService.getUser().pipe(
      catchError(() => {
        this.router.navigate(['login']);
        return of([]);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }
}
