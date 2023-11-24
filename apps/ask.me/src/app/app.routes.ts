import { Route } from '@angular/router';
import { alreadyLoginGuard, loginGuard } from './guards/login.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: async () => (await import('@ask.me/login')).LoginModule,
    canActivate: [alreadyLoginGuard],
  },
  {
    path: 'register',
    loadChildren: async () => (await import('@ask.me/register')).RegisterModule,
    canActivate: [alreadyLoginGuard],
  },
  {
    path: 'users',
    loadChildren: async () => (await import('@ask.me/users')).UsersModule,
    canActivate: [loginGuard],
  },
];
