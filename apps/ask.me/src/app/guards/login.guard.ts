import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard = () => {
  const router = inject(Router);

  const token = localStorage.getItem('access_token');

  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

export const alreadyLoginGuard = () => {
  const router = inject(Router);

  const token = localStorage.getItem('access_token');

  if (token) {
    router.navigate(['users']);
    return false;
  } else {
    return true;
  }
};
