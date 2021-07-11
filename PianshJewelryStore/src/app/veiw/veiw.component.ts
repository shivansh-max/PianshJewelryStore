import { Component, OnInit, Output } from '@angular/core';
import { Jewlry } from '../Shared/jewlry.model';
import { JewlryService } from '../Shared/jewlry.service';
import { PaginationAmountCounterService } from '../Shared/pagination-amount-counter.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css'],
})
export class VeiwComponent implements OnInit {
  jewlries: Jewlry[] = [];
  searchprop: string = '';
  searchthing: string = '';
  props: string[] = [
    'id',
    'brand',
    'place',
    'name',
    'cost',
    'orderId',
    'date',
    'pic',
    'weight',
    'condition',
    'metal',
    'stone',
    'quantity',
    'soldin',
    'salesprice',
    'pandoraid',
  ];
  propsThatAreDefined: string[] = [
    'New With Tags',
    'New Without Tags',
    'Slightly Used',
    'Old',
    'Plated',
    'Gold',
    'Silver',
    'Other',
    'Diamond',
    'Pearl',
    'Saphire',
    'Ruby',
    'Emerald',
    'Onix',
    'Setreme',
    'None',
  ];
  nums: number[] = [1, 2, 3, 4, 5];
  canGoBack = false;
  canGoForward = false;
  last = false;

  constructor(
    private manager: JewlryService,
    public paginator: PaginationAmountCounterService
  ) {}

  ngOnInit(): void {
    this.jewlries = this.manager.getJewlries();
    this.manager.jewlrysChanged.subscribe((jewlries) => {
      this.jewlries = jewlries;
    });
  }

  setstr(prop: any) {
    this.searchprop = prop.target.value;
  }

  check(totalLength: number) {
    // console.log(
    //   'called in check amount',
    //   this.paginator.page * this.paginator.size
    // );
    // console.log('s : ', this.paginator.size, '    p : ', this.paginator.page);

    // console.log('called in check total', totalLength);
    // return totalLength;
    // console.log(this.paginator.page * this.paginator.size != totalLength);

    return this.paginator.page * this.paginator.size == totalLength;
  }

  changePage(posNeg: boolean) {
    if (posNeg == false && this.paginator.page - 1 >= 0) {
      this.paginator.page -= 1;
      this.canGoForward = false;
    } else if (posNeg == false && this.paginator.page - 1 < 0) {
      this.canGoBack = true;
      //   alert("You are at the first page you can't go farther back !!!");
    } else {
      this.paginator.page += 1;
      this.canGoBack = false;
      var totalLength = 0;
      this.manager.len().subscribe((output: any) => {
        totalLength = parseInt(output);

        // console.log(totalLength);
        if (this.check(output)) {
          this.paginator.page -= 1;
          //   alert("You are at the first page you can't go farther back !!!");
          this.canGoForward = true;
          this.jewlries = this.manager.getJewlries();
          return;
        }
      });
      //   console.log(this.check(totalLength));
    }
    this.jewlries = this.manager.getJewlries();
  }

  changeAmount(newAmount: any) {
    var newVal: number = newAmount.target.value;
    var totalLength = 0;
    this.manager.len().subscribe((output: any) => {
      totalLength = output;
    });
    // console.log(this.paginator.size);
    // console.log(newVal != this.paginator.size && newVal < totalLength);
    // newVal != this.paginator.size && newVal < totalLength
    if (!(newVal != this.paginator.size && newVal < totalLength)) {
      this.paginator.size = +newVal;
      this.paginator.page = 0;
      this.canGoBack = false;
      this.canGoForward = false;
      console.log(this.manager.getJewlries());
    } else if (newVal < totalLength) {
    }
    console.log(this.paginator.size);
  }
}
