import { Component, Input } from '@angular/core';
import { Icars } from '../Icars';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars-location',
  standalone: true,
  imports: [RouterModule],
  template: `
  <section class="card" [routerLink]="['/details', carsLocation.id]">
    <h2>{{ carsLocation.nombre }}</h2>
    <div class="card-image">
      <img [src]="carsLocation.img" alt="Car Image">
    </div>
    <p>
      {{ carsLocation.autor }} - {{ carsLocation.generos }}
    </p>
  </section>

  `,
  styleUrl: './cars-location.component.css'
})
export class CarsLocationComponent {
  @Input() carsLocation!: Icars;
}
