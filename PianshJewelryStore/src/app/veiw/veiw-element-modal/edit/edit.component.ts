import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jewlry} from './../../../Shared/jewlry.model';
import {JewlryService} from './../../../Shared/jewlry.service';
import {ApiManagerService} from '../../../Shared/api-manager.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  conditions: string[] = ['New With Tags','New Without Tags', 'Slightly Used', 'Old'];
  metals: string[] = ['Plated', 'Gold', 'Silver', 'Other'];
  stones: string[] = ['Diamond', 'Pearl', 'Saphire', 'Ruby', 'Emerald', 'Onix', 'Setreme' ,'None'];

  editForm!: FormGroup

  @Input() id!: string;
  @Input() index!: number;
  @Input() jewelry!: Jewlry;

  constructor(
    private jewelryService: JewlryService,
    private ApiMan: ApiManagerService) {
  }

  ngOnInit(): void {

    // console.log("got");

    this.ApiMan.getProps().subscribe((x: any) => {
      this.metals = x['metal']
      this.stones = x['stone']
      this.conditions = x['condition']
    })

    this.editForm = new FormGroup({
      "brand": new FormControl(this.jewelry.brand, [Validators.required]),
      "name":new FormControl(this.jewelry.nameOfItem, [Validators.required]),
      "quantity": new FormControl(this.jewelry.quantity, [Validators.required]),
      "purchasedFrom": new FormControl(this.jewelry.purchasedFrom, [Validators.required]),
      "imagePath": new FormControl(this.jewelry.pic, [Validators.required]),
      "cost": new FormControl(this.jewelry.cost, [Validators.required]),
      "orderId": new FormControl(this.jewelry.orderId, [Validators.required]),
      "datePurchased": new FormControl(this.jewelry.dataPurchesed, [Validators.required]),
      "weight": new FormControl(this.jewelry.weight, [Validators.required]),
      "soldin": new FormControl(this.jewelry.soldin, [Validators.required]),
      "salesprice": new FormControl(this.jewelry.salesprice, [Validators.required]),
      "pandoraid": new FormControl(this.jewelry.pandoraid, [Validators.required]),
      "condition": new FormControl(this.jewelry.conditionOfItem, [Validators.required]),
      "metal": new FormControl(this.jewelry.metal, [Validators.required]),
      "stone": new FormControl(this.jewelry.stone, [Validators.required])
    });
  }

  onSubmit(){
    this.jewelryService.editJewelry(this.index, new Jewlry(
      this.jewelry.id,
      this.editForm.value.brand,
      this.editForm.value.purchasedFrom,
      this.editForm.value.name,
      this.editForm.value.cost,
      this.editForm.value.orderId,
      this.editForm.value.datePurchased,
      this.editForm.value.imagePath,
      this.editForm.value.weight,
      this.editForm.value.condition,
      this.editForm.value.metal,
      this.editForm.value.stone,
      this.editForm.value.quantity,
      this.editForm.value.soldin,
      this.editForm.value.salesprice,
      this.editForm.value.pandoraid,
      '',
      '',
      ''));
    this.jewelryService.getJewlries();

  }

  onReset() {
    console.log("fads");
    this.editForm = new FormGroup({
      "brand": new FormControl(this.jewelry.brand, [Validators.required]),
      "name":new FormControl(this.jewelry.nameOfItem, [Validators.required]),
      "quantity": new FormControl(this.jewelry.quantity, [Validators.required]),
      "purchasedFrom": new FormControl(this.jewelry.purchasedFrom, [Validators.required]),
      "imagePath": new FormControl(this.jewelry.pic, [Validators.required]),
      "cost": new FormControl(this.jewelry.cost, [Validators.required]),
      "orderId": new FormControl(this.jewelry.orderId, [Validators.required]),
      "datePurchased": new FormControl(this.jewelry.dataPurchesed, [Validators.required]),
      "weight": new FormControl(this.jewelry.weight, [Validators.required]),
      "soldin": new FormControl(this.jewelry.soldin, [Validators.required]),
      "salesprice": new FormControl(this.jewelry.salesprice, [Validators.required]),
      "pandoraid": new FormControl(this.jewelry.pandoraid, [Validators.required]),
      "condition": new FormControl(this.jewelry.conditionOfItem, [Validators.required]),
      "metal": new FormControl(this.jewelry.metal, [Validators.required]),
      "stone": new FormControl(this.jewelry.stone, [Validators.required])
    });
  }

  onDelete() {
    this.jewelryService.deleteJewelry(this.index);
  }

  chooseCon(event: any) {
    this.editForm.setValue(
      {
        'condition' : event.target.value
      }
    );
  }

  chooseMet(event: any) {
    this.editForm.setValue(
      {
        'metal' : event.target.value
      }
    );
  }

  chooseStone(event: any) {
    this.editForm.setValue(
      {
        'stone' : event.target.value
      }
    );
  }
}
