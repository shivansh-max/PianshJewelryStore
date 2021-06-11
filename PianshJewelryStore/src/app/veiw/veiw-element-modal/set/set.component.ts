import { Component, Input, OnInit } from '@angular/core';
import { Jewlry } from './../../../Shared/jewlry.model';


@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  @Input() jewelry!: Jewlry;

  constructor() { }

  ngOnInit(): void {
  }

}
