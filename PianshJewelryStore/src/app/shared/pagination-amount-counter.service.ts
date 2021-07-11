import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationAmountCounterService {
  size!: number;
  page!: number;
  constructor() {
    this.size = 2;
    this.page = 0;
  }
}
