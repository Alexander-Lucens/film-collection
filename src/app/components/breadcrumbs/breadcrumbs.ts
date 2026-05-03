import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

interface Crumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private filmServices = inject(FilmService);
  private router = inject(Router);
  get crumbs(): Crumb[] {
    return this.buildCrumbs(this.router.url);
  }

  navigateTo(path: string | undefined, event: MouseEvent): void {
    if (!path) {
      return;
    }

    event.preventDefault();
    this.router.navigateByUrl(path);
  }

  private buildCrumbs(url: string): Crumb[] {
    if (url === '/') {
      return [{ label: 'Home' }];
    }

    if (url === '/about') {
      return [
        { label: 'Home', path: '/' },
        { label: 'About' },
      ];
    }

    const filmTitleId: number = Number(url.split('/films/')[1]);
    const filmTitle = this.filmServices.getFilmById(filmTitleId)?.title || 'Unknown Film';

    if (url.startsWith('/films/')) {
      return [
        { label: 'Home', path: '/' },
        { label: filmTitle }
      ];
    }

    return [{ label: 'Home', path: '/' }];
  }
}
