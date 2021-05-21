import { Component, OnInit } from '@angular/core';
import { Jewlry } from '../Shared/jewlry.model';
import { JewlryService } from '../Shared/jewlry.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css'],
})
export class VeiwComponent implements OnInit {
  searched: string = '';
  jewlries: Jewlry[] = [];
  searchprop: string = '';
  props:string[] = [
    'id',
    'brand',
    'purchasedFrom',
    'maneOfItem',
    'cost',
    'orderId',
    'datePurchesed',
    'pic',
    'weight',
    'conditionOfItem',
    'metal',
    'stone',
    'quantity',
    'soldin',
    'salesprice',
    'pandoraid'];
  page: number = 0;
  amount: number = 0;

  constructor(private manager: JewlryService) {}

  ngOnInit(): void {
    this.jewlries = this.manager.getJewlries();
    this.manager.jewlrysChanged.subscribe((jewlries) => {
      this.jewlries = jewlries;
    });
  }

  setstr(prop: any) {
    this.searchprop=prop.target.value;
  }

  changeAmount(posNeg: boolean) {
    if (posNeg) this.amount += 1
    else this.amount -= 1
  }

  changePage(posNeg: boolean) {
    if (posNeg) this.page += 1
    else this.page -= 1
  }
}
