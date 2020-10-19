import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  
  product: any = {};
  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line: max-line-length
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductInfo();
    console.log(this.id);
  }

  getProductInfo() {
    if (this.id) {
      this.productService.get(this.id).subscribe((p) => {
        this.product = p;
        this.product.Soil_Type = this.product.Soil_Type.replace(/;/g, ' or ');
        this.product.Suitable_Site_Conditions = this.product.Suitable_Site_Conditions.replace(/;/g, ' or ');
        this.product.Bloom_Time = this.product.Bloom_Time.replace(/;/g,', ');
        this.product.Flower_Color = this.product.Flower_Color.replace(/;/g,', ');
        this.product.Appropriate_Location = this.product.Appropriate_Location.replace(/;/g,' or ');

        console.log(p);
      });
    }
  }

  ngOnInit(): void {}
}
