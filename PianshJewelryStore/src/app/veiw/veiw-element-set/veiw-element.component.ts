import { Component, Input, OnInit } from '@angular/core';
import { Jewlry } from '../../Shared/jewlry.model';
import { DomSanitizer, SafeUrl , SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-veiw-element',
  templateUrl: './veiw-element.component.html',
  styleUrls: ['./veiw-element.component.css'],
})
export class VeiwElementComponent implements OnInit {
  @Input() index!: number;
  @Input() jewelry!: Jewlry;

  prop = false;
  safify: SafeResourceUrl | undefined;

  constructor(private sanitizer : DomSanitizer) {
  }

  ngOnInit(): void {

  }

  trueify() {
    this.prop != this.prop;
  }
}
