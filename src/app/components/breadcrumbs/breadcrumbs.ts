import { Component, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { signal, effect } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film.model';

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

  films: Film[] = this.filmServices.filteredFilms();
  private router = inject(Router);
  crumbs = signal<Crumb[]>([{ label: 'Home', path: '/' }]);

  constructor() {
    effect(() => {});
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.buildCrumbs(event.urlAfterRedirects);
      }
    });
  }

  private buildCrumbs(url: string): void {
    if (url === '/') {
      this.crumbs.set([{ label: 'Home' }]);
      return;
    }

    const filmTitleId: number = Number(url.split('/films/')[1]);
    const filmTitle = this.films.find(film => film.id === filmTitleId)?.title || 'Unknown Film';

    if (url.startsWith('/films/')) {
      this.crumbs.set([
        { label: 'Home', path: '/' },
        { label: filmTitle }
      ]);
    }
  }
}
