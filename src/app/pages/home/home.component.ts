import { Component } from '@angular/core';
import { IAuto } from '../../models/i-auto';


export interface IBrand {
  brand: string;
  brandLogo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  auto!: IAuto[];
  randomAuto: IAuto[] = [];
  brands!: IBrand[];

  ngOnInit(): void {
    this.findAuto();
  }

  async findAuto() {
    const res = await fetch("db.json");
    const response = await res.json();
    this.auto = response;
    console.log(this.auto);
    this.brands = this.Autobrands();
    this.randomAuto2(2);

  }

  Autobrands(): IBrand[] {
    const brand: IBrand[] = [];
    const brandSet = new Set();

    for (let i = 0; i < this.auto.length; i++) {
      if (!brandSet.has(this.auto[i].brandLogo)) {
        brandSet.add(this.auto[i].brandLogo);
        brand.push({ brand: this.auto[i].brand, brandLogo: this.auto[i].brandLogo });
      }
    }
    console.log(brand);
    return brand;
  }

  randomAuto2(num: number) {
    const random: Set<number> = new Set();
    while (random.size < num) {
      const indice = Math.floor(Math.random() * this.auto.length);
      random.add(indice);
    }

    this.randomAuto = Array.from(random).map(index => this.auto[index]);
    console.log(this.randomAuto);
  }
  cars = [];


  getBrandLink(brand: string): string {
    switch (brand.toLowerCase()) {
      case 'fiat':
        return '/fiat';
      case 'audi':
        return '/audi';
      case 'ford':
        return '/ford';
      default:
        return '/home';
    }
  }
}

