import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Jewlry } from '../../Shared/jewlry.model';
import {
  DomSanitizer,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { VeiwElementModalComponent } from '../veiw-element-modal/veiw-element-modal.component';
import { PasserForModalService } from '../Shared/passer-for-modal.service';

@Component({
  selector: 'app-veiw-element',
  templateUrl: './veiw-element.component.html',
  styleUrls: ['./veiw-element.component.css'],
})
export class VeiwElementComponent implements OnInit {
  @Input() index!: number;
  @Input() jewelry!: Jewlry;
  @Input() color!: boolean;

  prop = false;
  safify: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, public matDialog: MatDialog, private passer: PasserForModalService) {}

  ngOnInit(): void {
    // console.log(this.color);
  }

  trueify() {
    this.prop != this.prop;
  }

  openModal() {

    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';

    this.passer.jewelry = this.jewelry;
    this.passer.index = this.index;
    // console.log(this.passer.jewelry);
    

    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(
      VeiwElementModalComponent,
      dialogConfig
    );
    
  }
}
