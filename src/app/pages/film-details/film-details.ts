import { Component, inject, OnInit, signal } from '@angular/core';
import { DurationPipe } from '../../pipes/duration-pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private filmService = inject(FilmService);

  film = signal<Film | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.film.set(this.filmService.getFilmById(id));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
