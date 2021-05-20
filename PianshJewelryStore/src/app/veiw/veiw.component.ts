import { Component, OnInit } from '@angular/core';
import { Jewlry } from '../Shared/jewlry.model';
import { JewlryService } from '../Shared/jewlry.service';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css'],
})
export class VeiwComponent implements OnInit {
  searched: string = '';
  jewlries: Jewlry[] = [];
  // jewlriesList!: Observable<Jewlry[]>;
  searchprop: string = '';

  constructor(private manager: JewlryService) {}

  ngOnInit(): void {
    this.jewlries = this.manager.getJewlries();
    // this.jewlriesList = this.manager.jewelriesObserver;
    this.manager.jewlrysChanged.subscribe((jewlries) => {
      this.jewlries = jewlries;
    });
  }

  setstr(prop: string) {
    this.searchprop=prop;
  }
}
