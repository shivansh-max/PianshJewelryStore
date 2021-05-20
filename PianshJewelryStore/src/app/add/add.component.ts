import {ThisReceiver, ThrowStmt} from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jewlry} from '../Shared/jewlry.model';
import {JewlryService} from '../Shared/jewlry.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  conditions: string[] = ['New With Tags', 'New Without Tags', 'Slightly Used', 'Old'];
  // conditions: string[] = ['bob','bob','bob']
  metals: string[] = ['Plated', 'Gold', 'Silver', 'Other'];
  stones: string[] = ['Diamond', 'Pearl', 'Saphire', 'Ruby', 'Emerald', 'Onix', 'Setreme', 'None'];

  addForm!: FormGroup;

  constructor(private jewlryService: JewlryService, private router: Router) {
  }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      'brand': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null, [Validators.required]),
      'purchasedFrom': new FormControl(null, [Validators.required]),
      'imagePath': new FormControl(null, [Validators.required]),
      'cost': new FormControl(null, [Validators.required]),
      'orderId': new FormControl(null, [Validators.required]),
      'datePurchased': new FormControl(null, [Validators.required]),
      'weight': new FormControl(null, [Validators.required]),
      'soldin': new FormControl(null, [Validators.required]),
      'salesprice': new FormControl(null, [Validators.required]),
      'pandoraid': new FormControl(null, [Validators.required]),
      'condition': new FormControl(null, [Validators.required]),
      'metal': new FormControl(null, [Validators.required]),
      'stone': new FormControl(null, [Validators.required])
    });
  }

  logger() {
    console.log(this.addForm);
  }

  onSubmit() {

    let jewlry: Jewlry = new Jewlry(
      (Math.floor(100000 + Math.random() * 900000)).toString(),
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
      this.addForm.value.soldin,
      this.addForm.value.salesprice,
      this.addForm.value.pandoraid,
      '',
      '',
      '');

    let date: String[] = [];

    date = this.addForm.value.datePurchased.slice('-');


    this.jewlryService.add(jewlry);

    // console.log(this.addForm.invalid)

    this.clear();

    this.router.navigate(['/home']);
  }

  clear() {
    this.addForm.reset();
  }

  onFileSelect(event: any) {
    this.addForm.setValue(
      {'imagePath': event.target.files[0]}
    );
  }
}
