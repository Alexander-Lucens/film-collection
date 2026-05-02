import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year: number = new Date().getFullYear();
  author: string = 'Oleksandr Kuzmin';
  githubUrl: string = 'https://github.com/Alexander-Lucens';
}
