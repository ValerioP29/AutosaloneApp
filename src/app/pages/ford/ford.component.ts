import { Component } from '@angular/core';
import { IAuto } from '../../models/i-auto';
@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  auto!: IAuto[];
  brand!: string;
  brandLogo!: string

  ngOnInit(): void {
      this.cars();
  }
  async cars() {
    const res = await fetch('db.json');
    const response = await res.json();
    this.auto = response.filter((auto: IAuto) => auto.brand === 'Ford');

    if (this.auto.length > 0) {
      this.brandLogo = this.auto[0].brandLogo;
      this.brand = this.auto[0].brand;
    }
  }
}
