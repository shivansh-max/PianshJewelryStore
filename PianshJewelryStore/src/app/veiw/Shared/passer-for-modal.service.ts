import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasserForModalService {
  public emitter = new Subject<number>();

  constructor() { }

  emit(num: number) {
    this.emitter.next(num)
  }
}
