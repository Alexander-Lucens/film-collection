import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'films/:id',
    loadComponent: () =>
      import('./pages/film-details/film-details').then((m) => m.FilmDetails),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
