import {Injectable, OnInit, resolveForwardRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Jewlry} from './jewlry.model';
import {ApiManagerService} from './api-manager.service';

@Injectable({
  providedIn: 'root',
})

export class JewlryService implements OnInit {
  ngOnInit(): void {
  }

  public jewlrysChanged = new Subject<Jewlry[]>();

  jewelriesObserver!: Observable<Jewlry[]>;
  jewlries: Jewlry[] = [];

  constructor(private api: ApiManagerService) {
  }

  add(jewlry: Jewlry) {
    this.jewlries.push(jewlry);
    this.jewlrysChanged.next(this.jewlries.slice());

    this.api.add(jewlry).subscribe((results) => {
      console.log(results);
    });

    this.getJewlries();
  }

  getJewlries(): Jewlry[] {
    this.api.getAll().subscribe((jewelries) => {
      this.jewlries = jewelries;
      this.jewlrysChanged.next(this.jewlries.slice());
    });
    return this.jewlries.slice();
  }

  getByIndex(index: number) {
    return this.jewlries[index];
  }

  deleteJewelry(index: number) {
    const id: string = this.jewlries[index].id;
    console.log(this.jewlries);
    this.jewlries.splice(index, 1);
    console.log(this.jewlries);
    this.jewlrysChanged.next(this.jewlries.slice());
    this.api.delete(id).subscribe((result) => {
    });

  }

  editJewelry(index: number, newJewelry: Jewlry) {
    this.api.edit(newJewelry).subscribe((output) => {
      console.log(output);
    });
    this.getJewlries();
  }
}


