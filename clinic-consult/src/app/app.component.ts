import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent],
  // templateUrl: './app.component.html',
  template: `
    <main>
      <header class="brand-name">
        <h1>Cadastro de consulta</h1>
      </header>
      <section class="content">
        <app-list></app-list>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clinic-consult';
}
