import { computed, Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';
import { FILMS_DATA } from '../models/films.data';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  private films = signal<Film[]>(FILMS_DATA);
  searchQuery = signal<string>('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) {
      return this.films();
    }
    return this.films().filter(film => film.title.toLowerCase().includes(query));
  });

  favorites = computed(() => this.films().filter(film => film.isFavorite));

  getFilmById(id: number): Film | undefined {
    return this.films().find(film => film.id === id);
  }

  toggleFavorite(id: number): void {
    const films = this.films();
    const index = films.findIndex(film => film.id === id);
    if (index !== -1) {
      const updatedFilm = { ...films[index], isFavorite: !films[index].isFavorite };
      this.films.set([...films.slice(0, index), updatedFilm, ...films.slice(index + 1)]);
    }
  }

}
