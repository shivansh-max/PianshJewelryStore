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

            for (var jewelry of results) {
              // console.log(jewelry);

              changed_results.push(
                new Jewlry(jewelry.id, jewelry.brand, jewelry.purchasedfrom, jewelry.nameofitem, jewelry.cost, jewelry.orderid, jewelry.datapuchesed, jewelry.picture, jewelry.weight, jewelry.conditionofitem, jewelry.metal, jewelry.stone, jewelry.quantity, jewelry.soldin, jewelry.salesprice, jewelry.pandoraid, '', '', ''));
            }

            return changed_results;
          }
        )
      );
  }

  add(jewelry : Jewlry) {
    let stri = Math.random().toString(36).substring(2)

    var post_json = {
      "id": stri,
      "brand": jewelry.brand,
      "purchasedfrom": jewelry.purchasedFrom,
      "nameofitem": jewelry.nameOfItem,
      "cost": jewelry.cost,
      "orderid": jewelry.orderId,
      "datapuchesed": jewelry.dataPurchesed,
      "pic": jewelry.pic,
      "weight": jewelry.weight,
      "conditionofitem": jewelry.conditionOfItem,
      "metal": jewelry.metal,
      "stone": jewelry.stone,
      "quantity": jewelry.quantity,
      "soldin": jewelry.soldin,
      "salesprice": jewelry.salesprice,
      "pandoraid": jewelry.pandoraid,
      "filler1": jewelry.fill1,
      "filler2": jewelry.fill2,
      "filler3": jewelry.fill3
    }

    // console.log(post_json);

    return this.http.post(this.apis.main + 'add', post_json);

  }

  delete(id: string) {
    let params = new HttpParams().set("id", id.toString());
    return this.http.delete(this.apis.main + 'deleteOne', {params});
  }
}
