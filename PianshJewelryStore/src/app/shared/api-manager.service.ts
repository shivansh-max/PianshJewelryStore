import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Jewlry} from './jewlry.model';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService implements OnInit {
  private apis = environment;

  ngOnInit(): void {
    // this.getAll()
  }

  constructor(private http: HttpClient) {
  }


  getAll() {
    return this.http.get<Jewlry>(this.apis.main + 'getall')
      .pipe(
        map(
          (results: any) => {

            var changed_results: Jewlry[] = [];

            // console.log(results);

            for (var jewlry of results) {
              // console.log(jewlry);

              changed_results.push(
                new Jewlry(jewlry.id, jewlry.brand, jewlry.purchasedfrom, jewlry.nameofitem, jewlry.cost, jewlry.orderid, jewlry.datapuchesed, jewlry.picture, jewlry.weight, jewlry.conditionofitem, jewlry.metal, jewlry.stone, jewlry.quantity, jewlry.soldin, jewlry.salesprice, jewlry.pandoraid, '', '', ''));
            }

            return changed_results;
          }
        )
      );
  }

  add(jewlry: Jewlry) {
    let stri = Math.random().toString(36).substring(2);

    var post_json = {
      'id': stri,
      'brand': jewlry.brand,
      'purchasedfrom': jewlry.purchasedFrom,
      'nameofitem': jewlry.nameOfItem,
      'cost': jewlry.cost,
      'orderid': jewlry.orderId,
      'datapuchesed': jewlry.dataPurchesed,
      'picture': jewlry.pic,
      'weight': jewlry.weight,
      'conditionofitem': jewlry.conditionOfItem,
      'metal': jewlry.metal,
      'stone': jewlry.stone,
      'quantity': jewlry.quantity,
      'soldin': jewlry.soldin,
      'salesprice': jewlry.salesprice,
      'pandoraid': jewlry.pandoraid,
      'filler1': jewlry.fill1,
      'filler2': jewlry.fill2,
      'filler3': jewlry.fill3
    };

    // console.log(post_json);

    return this.http.post(this.apis.main + 'add', post_json);

  }

  delete(id: string) {
    let params = new HttpParams().set('id', id.toString());
    return this.http.delete(this.apis.main + 'deleteOne', {params});
  }

  edit(jewlry: Jewlry) {
    var post_json = {
      'id': jewlry.id,
      'brand': jewlry.brand,
      'purchasedfrom': jewlry.purchasedFrom,
      'nameofitem': jewlry.nameOfItem,
      'cost': jewlry.cost,
      'orderid': jewlry.orderId,
      'datapuchesed': jewlry.dataPurchesed,
      'picture': jewlry.pic,
      'weight': jewlry.weight,
      'conditionofitem': jewlry.conditionOfItem,
      'metal': jewlry.metal,
      'stone': jewlry.stone,
      'quantity': jewlry.quantity,
      'soldin': jewlry.soldin,
      'salesprice': jewlry.salesprice,
      'pandoraid': jewlry.pandoraid,
      'filler1': jewlry.fill1,
      'filler2': jewlry.fill2,
      'filler3': jewlry.fill3
    };

    console.log(post_json);

    let params = new HttpParams().set('id', jewlry.id);
    return this.http.put(this.apis.main + 'edit', post_json, {params});
  }
}
