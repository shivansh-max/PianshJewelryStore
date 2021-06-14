import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jewlry } from 'src/app/Shared/jewlry.model';
import { JewlryService } from 'src/app/Shared/jewlry.service';
import { PasserForModalService } from '../Shared/passer-for-modal.service';

@Component({
  selector: 'app-veiw-element-modal',
  templateUrl: './veiw-element-modal.component.html',
  styleUrls: ['./veiw-element-modal.component.css'],
})
export class VeiwElementModalComponent implements OnInit {
  jewelry!: Jewlry;
  index!: number;

  edit_veiw: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<VeiwElementModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public passer: PasserForModalService
  ) {}

  ngOnInit() {
    this.jewelry = this.passer.jewelry;
    this.index = this.passer.index;
  }

  close() {
    this.dialogRef.close();
  }

  change() {
    this.edit_veiw = !this.edit_veiw
  }
}
