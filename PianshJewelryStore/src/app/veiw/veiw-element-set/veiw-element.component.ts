import { Component, Input, OnInit } from '@angular/core';
import { Jewlry } from '../../shared/jewlry.model';

@Component({
  selector: 'app-veiw-element',
  templateUrl: './veiw-element.component.html',
  styleUrls: ['./veiw-element.component.css'],
})
export class VeiwElementComponent implements OnInit {
  @Input() index!: number;
  @Input() jewelry!: Jewlry;

  prop = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  trueify() {
    this.prop != this.prop;
  }
}
