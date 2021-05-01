import { Component, OnInit } from '@angular/core';
import { Jewlry } from '../shared/jewlry.model';
import { JewlryService } from '../shared/jewlry.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css'],
})
export class VeiwComponent implements OnInit {
  searched: string = '';
  jewlries: Jewlry[] = [];
  searchprop: string = '';

  constructor(private manager: JewlryService) {}

  ngOnInit(): void {
    this.jewlries = this.manager.getJewlries();
    this.manager.jewlrysChanged.subscribe((jewlries) => {
      this.jewlries = jewlries;
    });
  }

  setstr(prop: string) {
    this.searchprop=prop;
  }
}
