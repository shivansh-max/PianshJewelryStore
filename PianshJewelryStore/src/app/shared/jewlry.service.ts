import {Injectable, OnInit, resolveForwardRef} from '@angular/core';
import {Subject} from 'rxjs';
import {Jewlry} from './jewlry.model';
import {ApiManagerService} from './api-manager.service';

@Injectable({
  providedIn: 'root',
})

export class JewlryService implements OnInit {
  ngOnInit(): void {
    // console.log(this.jewlries);
    //
    // this.api.getAll().subscribe((jewelries) => {
    //   this.jewlries = jewelries;
    //   console.log(jewelries);
    //   console.log(this.jewlries);
    // });
    //
    // console.log(this.jewlries);

  }

  public jewlrysChanged = new Subject<Jewlry[]>();

  jewlries: Jewlry[] = [];

  constructor(private api: ApiManagerService) {
  }

  add(jewlry: Jewlry) {
    this.jewlries.push(jewlry);
    this.jewlrysChanged.next(this.jewlries.slice());
    console.log(this.jewlries);
  }

  getJewlries(): Jewlry[] {
    this.api.getAll().subscribe((jewelries) => {
      this.jewlries = jewelries;
      console.log(jewelries);
      console.log(this.jewlries);
    });
    return this.jewlries.slice();
  }
}
