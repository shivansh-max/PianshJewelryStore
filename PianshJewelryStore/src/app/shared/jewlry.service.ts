import { Injectable, resolveForwardRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Jewlry } from './jewlry.model';

@Injectable({
  providedIn: 'root',
})

//https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc4e7aaa1/productimages/main/369174C00_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5
export class JewlryService {
  public jewlrysChanged = new Subject<Jewlry[]>();

  jewlry: Jewlry[] = [
    new Jewlry(
      239103,
      'Pandora',
      'Pandora',
      'Time Turner',
      100,
      'KJLFoewojKLJFd',
      '2020-10-22 ',
      'https://us.pandora.net/dw/image/v2/AAVX_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwc4e7aaa1/productimages/main/369174C00_RGB.JPG?sw=1000&sh=1000&sm=fit&sfrm=png&bgcolor=F5F5F5      ',
      10,
      'New With Tags',
      'Gold',
      'None',
      1,
      '',
      ''
    ),
    new Jewlry(
      239103,
      'Pandora',
      'Ebay',
      'Dice Charm',
      60,
      'KJLFohtyjKLJFd',
      '2019-10-22 ',
      'https://cdn.shopify.com/s/files/1/0268/1074/4925/products/golddice_720x.jpg?v=1595029071',
      2,
      'New With Tags',
      'Gold',
      'Diamond',
      2,
      '',
      ''
    ),
    new Jewlry(
      239103,
      'Pandora',
      'Pandora',
      'Dice Charm',
      50,
      'KJLFohtyjKLJFd',
      '2019-10-22 ',
      'https://cdn.shopify.com/s/files/1/0268/1074/4925/products/lucky_720x.jpg?v=1595029166',
      2,
      'New With Tags',
      'Silver',
      'Diamond',
      2,
      '',
      ''
    ),
  ];

  constructor() {}

  add(jewlry: Jewlry) {
    this.jewlry.push(jewlry);
    this.jewlrysChanged.next(this.jewlry.slice());
    console.log(this.jewlry);
  }

  getJewlries(): Jewlry[] {
    return this.jewlry.slice();
  }
}
