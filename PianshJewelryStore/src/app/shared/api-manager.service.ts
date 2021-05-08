import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
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
    return this.http.get<Jewlry>(this.apis.getall)
      .pipe(
        map(
          (results: any) => {

            var changed_results: Jewlry[] = [];

            console.log(results);

            for (var jewelry of results) {
              // console.log(jewelry);

              changed_results.push(
                new Jewlry(jewelry.id, jewelry.brand, jewelry.purchasedfrom,
                  jewelry.nameofitem, jewelry.cost, jewelry.orderid,
                  jewelry.datapuchesed, jewelry.picture, jewelry.weight,
                  jewelry.conditionofitem, jewelry.metal, jewelry.stone,
                  jewelry.quantity, jewelry.soldin, jewelry.salesprice,
                  jewelry.pandoraid, '', '', ''
                ));
            }

            return changed_results;
          }
        )
      );
  }


}
