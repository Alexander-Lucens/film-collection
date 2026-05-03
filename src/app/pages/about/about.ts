import { Component } from '@angular/core';

interface AboutSection {
  title: string;
  text: string;
}

interface AboutDetail {
  label: string;
  value: string;
}

interface AboutStep {
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  summary = [
    'Built with Angular 21 and standalone components',
    'Uses a shared service for film state',
    'Includes a details view, search, and favorites flow',
  ];

  sections: AboutSection[] = [
    {
      title: 'What this project is',
      text: 'Film Collection is a compact frontend app for browsing a film list, opening a detail page, searching by title, and marking films as favorites.',
    },
    {
      title: 'Why it exists',
      text: 'It is a good practice project for showing how Angular pages, routing, state, and reusable UI pieces fit together in one polished interface.',
    },
    {
      title: 'How the app works',
      text: 'Film data is stored in memory, the service owns search and favorite state, and the UI reacts immediately when the user interacts with the cards.',
    },
  ];

  details: AboutDetail[] = [
    { label: 'Stack', value: 'Angular 21, TypeScript, SCSS' },
    { label: 'Pages', value: 'Home, Film Details, About' },
    { label: 'UI pieces', value: 'Header, breadcrumbs, footer, film card' },
    { label: 'Custom logic', value: 'Autofocus directive and duration pipe' },
  ];

  steps: AboutStep[] = [
    {
      title: 'Browse',
      text: 'Open the home page to scroll through the film collection.',
    },
    {
      title: 'Search',
      text: 'Use the search field to filter the collection by title.',
    },
    {
      title: 'Favorite',
      text: 'Toggle the heart button to mark a film as a favorite.',
    },
    {
      title: 'Inspect',
      text: 'Open a film card to see a dedicated details page.',
    },
  ];
}
