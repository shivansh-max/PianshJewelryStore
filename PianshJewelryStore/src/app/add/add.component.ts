import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Jewlry } from '../shared/jewlry.model';
import { JewlryService } from '../shared/jewlry.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  conditions: string[] = ['New With Tags','New Without Tags', 'Slightly Used', 'Old'];
  // conditions: string[] = ['bob','bob','bob']
  metals: string[] = ['Plated', 'Gold', 'Silver'];
  stones: string[] = ['Diamond', 'Pearl', 'Saphire', 'Ruby', 'Emerald', 'Onix', 'Setreme' ,'None'];

  addForm!: FormGroup;

  constructor(private jewlryService: JewlryService,private router: Router) {}

  ngOnInit(): void {

    this.addForm = new FormGroup({
      "brand": new FormControl(null, [Validators.required]),
      "name":new FormControl(null, [Validators.required]),
      "cost": new FormControl(null, [Validators.required]),
      "orderId": new FormControl(null, [Validators.required]),
      "purchasedFrom": new FormControl(null, [Validators.required]),
      "datePurchased": new FormControl(null, [Validators.required]),
      "imagePath": new FormControl(null, [Validators.required]),
      "weight": new FormControl(null, [Validators.required]),
      "condition": new FormControl(null, [Validators.required]),
      "metal": new FormControl(null, [Validators.required]),
      "stone": new FormControl(null, [Validators.required]),
      "quantity": new FormControl(null, [Validators.required])
    });
  }

  logger() {
    console.log(
      this.addForm.value
    );

    console.log(this.addForm.value.brand.valid,
    this.addForm.value.purchasedFrom.valid,
    this.addForm.value.name.valid,
    this.addForm.value.cost.valid,
    this.addForm.value.orderId.valid,
    this.addForm.value.datePurchased.valid,
    this.addForm.value.imagePath.valid,
    this.addForm.value.weight.valid,
    this.addForm.value.condition.valid,
    this.addForm.value.metal.valid,
    this.addForm.value.stone.valid,
    this.addForm.value.quantity.valid)
  }

  onSubmit() {

    let date: String[] = [];

    date = this.addForm.value.datePurchased.slice("-")

    let jewlry: Jewlry = new Jewlry(
      (Math.floor(100000 + Math.random() * 900000)),
      this.addForm.value.brand,
      this.addForm.value.purchasedFrom,
      this.addForm.value.name,
      this.addForm.value.cost,
      this.addForm.value.orderId,
      this.addForm.value.datePurchased,
      this.addForm.value.imagePath,
      this.addForm.value.weight,
      this.addForm.value.condition,
      this.addForm.value.metal,
      this.addForm.value.stone,
      this.addForm.value.quantity,
      "",
      ""
      );


      this.jewlryService.add(jewlry)

      console.log(this.addForm.invalid)

      this.clear()

    this.router.navigate(['/home'])
  }

  clear() {
    this.addForm.reset()
  }

  onFileSelect(event: any)  {
    this.addForm.setValue(
      {"imagePath":event.target.files[0]}
    )
  }
}
