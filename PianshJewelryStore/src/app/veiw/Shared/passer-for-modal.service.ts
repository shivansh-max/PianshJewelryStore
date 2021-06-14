import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Jewlry } from 'src/app/Shared/jewlry.model';

@Injectable({
  providedIn: 'root'
})
export class PasserForModalService {
  public emitter = new Subject<Jewlry>();

  public jewelry!: Jewlry;
  public index!: number;

  constructor() { }

  emit(jewelry: Jewlry) {
    this.emitter.next(jewelry)
  }
}
