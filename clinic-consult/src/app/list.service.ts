import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private consults: Array<string> = [];

  constructor() {}

  getConsult(): Array<string> {
    return this.consults;
  }

  addConsult(consult: string) {
    this.consults.push(consult);
  }

  removeConsult(index: number) {
    this.consults.splice(index, 1);
  }
}
