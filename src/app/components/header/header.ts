import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  logoTitle = 'Film Collection';
  navLinks = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' }
  ];
}
