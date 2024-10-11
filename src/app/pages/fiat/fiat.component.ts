import { Component } from '@angular/core';
import { IAuto } from '../../models/i-auto';
@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  auto!: IAuto[];
  brand!: string;
  brandLogo!: string

  ngOnInit(): void {
      this.cars();
  }
  async cars() {
    const res = await fetch('db.json'); // Controlla che questo percorso sia corretto
    const response = await res.json();
    this.auto = response.filter((auto: IAuto) => auto.brand === 'Fiat');

    if (this.auto.length > 0) {
      this.brandLogo = this.auto[0].brandLogo;
      this.brand = this.auto[0].brand;
    }
  }
}
