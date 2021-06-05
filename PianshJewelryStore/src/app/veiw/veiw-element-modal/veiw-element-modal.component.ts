import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jewlry } from 'src/app/Shared/jewlry.model';
import { JewlryService } from 'src/app/Shared/jewlry.service';

@Component({
  selector: 'app-veiw-element-modal',
  templateUrl: './veiw-element-modal.component.html',
  styleUrls: ['./veiw-element-modal.component.css'],
})
export class VeiwElementModalComponent implements OnInit {
  id!: number;
  index!: number;
  jewelry!: Jewlry;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jewelryService: JewlryService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id
    this.index = this.route.snapshot.queryParams.index

    this.jewelry = this.jewelryService.getByIndex(this.index)
  }

  close() {
    this.router.navigate(['/veiw'])
  }
}
