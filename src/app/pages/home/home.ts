import { Component, inject, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { FilmCard } from '../../components/film-card/film-card';
import { AutofocusDirective } from '../../directives/autofocus';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-home',
  imports: [ FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private filmServices = inject(FilmService);

  films = this.filmServices.filteredFilms;

  @ViewChild('filmList', { read: ElementRef }) filmList!: ElementRef<HTMLElement>;
  @ViewChildren('filmItem', { read: ElementRef }) filmItems!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const container = this.filmList?.nativeElement;
    if (!container) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }, { root: container, threshold: [0.5, 0.6, 0.75] });

    // Observe current items
    this.filmItems.forEach(fi => this.observer!.observe(fi.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filmServices.searchQuery.set(value);
  }

  onFavoriteToggle(id: number): void {
    this.filmServices.toggleFavorite(id);
  }
}
