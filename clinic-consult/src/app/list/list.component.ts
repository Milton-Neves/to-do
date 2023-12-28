import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      type="text"
      id="clearInput"
      [(ngModel)]="binding"
      placeholder="Cadastre sua consulta"
    />
    <button (click)="addConsult(binding)">add-consulta</button>
    <ul>
      <li *ngFor="let consult of consults; let i = index">
        {{ consult }}
        <button (click)="removeConsult(i)">Remover</button>
      </li>
    </ul>
  `,
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  consults: Array<string> = [];
  binding: string = '';

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.consults = this.listService.getConsult();
  }

  addConsult(consult: string) {
    this.listService.addConsult(consult);
    this.consults = this.listService.getConsult();
    const clear = document.getElementById('clearInput') as HTMLInputElement;
    clear.value = '';
  }

  removeConsult(index: number) {
    this.listService.removeConsult(index);
    this.consults = this.listService.getConsult();
  }
}
