import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <main>
    <header>
      <img src="https://st3.depositphotos.com/24006134/31647/v/450/depositphotos_316473636-stock-illustration-book-logo-icon-template-logo.jpg" alt="logo" aria-hidden="true" />
      <h2 routerLink="/">Inicio</h2>
    </header>
    <router-outlet></router-outlet>.
  </main>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto_Angular';
}
