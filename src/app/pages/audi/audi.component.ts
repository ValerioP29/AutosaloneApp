import { IAuto } from './../../models/i-auto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  auto!: IAuto[];
  brand!: string;
  brandLogo!: string

  ngOnInit(): void {
      this.cars();
  }
  async cars() {
    const res = await fetch('db.json');
    const response = await res.json();
    this.auto = response.filter((auto: IAuto) => auto.brand === "Audi");

    if (this.auto.length > 0) {
      this.brandLogo = this.auto[0].brandLogo;
      this.brand = this.auto[0].brand;
    }
  }
}



