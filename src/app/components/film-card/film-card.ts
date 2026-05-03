import { Component, inject, input, output } from '@angular/core';
import { Film } from '../../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  favoriteToggled = output<number>();

  private router = inject(Router);

  cardClicked(): void {
    this.router.navigate(['/films', this.film().id]);
  }

  onToggleFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }
}
