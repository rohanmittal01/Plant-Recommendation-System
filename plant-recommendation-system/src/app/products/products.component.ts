import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productListCollection: any[];
  subscribe1: Subscription;
  category: string;
  filteredProducts: any = [];
  cart: any;
  cartSubscription: Subscription;
  availability;
  noProducts = false;
  minRange;
  maxRange;
  range;
  familyName = '';
  plantType = '';
  bloomTime = '';
  sizeAtMaturity = '';
  suitableSiteConditions = '';
  soilType = '';
  waterNeeds = '';
  appropriateLocation = '';
  filterButtonClicked = false;
  searchResult = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) {
    // console.log('-------------------------------');
    this.getCart();
    this.getProducts();
    console.log('family: ' + this.familyName);
    console.log('1');
  }

  ngOnInit() {}

  getCart() {
    this.cartService.getCart().subscribe(
      (data: any) => {
        this.cart = data;
      },
      (error) => {}
    );
  }

  getProducts() {
    // console.log('prod');
    console.log('2');
    this.familyName = localStorage.getItem('family');
    console.log('x: ' + this.familyName);
    console.log(localStorage.getItem('family'));
    if (this.familyName === '' || this.familyName == null) {
      this.productService.getAllProducts().subscribe((data: any) => {
        console.log('3');
        this.productListCollection = data;
        console.log(this.productListCollection);
        this.findMatchPercent();
        this.filter();
      });
    } else {
      this.productService
        .getFamilyData(this.familyName)
        .subscribe((data: any) => {
          this.productListCollection = data;
          console.log(data);
          this.findMatchPercent();
          this.filter();
        });
    }
  }

  findMatchPercent() {
    this.familyName = localStorage.getItem('family');
    this.plantType = localStorage.getItem('plantType');
    this.bloomTime = localStorage.getItem('bloomTime');
    this.sizeAtMaturity = localStorage.getItem('sizeAtMaturity');
    this.suitableSiteConditions = localStorage.getItem(
      'suitableSiteConditions'
    );
    this.soilType = localStorage.getItem('soilType');
    this.waterNeeds = localStorage.getItem('waterNeeds');
    this.appropriateLocation = localStorage.getItem('appropriateLocation');
    // tslint:disable-next-line: forin
    for (var i in this.productListCollection) {
      console.log(i);
      var c = 0;
      if (this.productListCollection[i].Bloom_Time == this.bloomTime) {
        c += 1;
      }
      if (this.productListCollection[i].Plant_Type == this.bloomTime) {
        c += 1;
      }
      if (
        this.productListCollection[i].Size_at_Maturity == this.sizeAtMaturity
      ) {
        c += 1;
      }
      if (this.productListCollection[i].Soil_Type == this.soilType) {
        c += 1;
      }
      if (
        this.productListCollection[i].Suitable_Site_Conditions ==
        this.suitableSiteConditions
      ) {
        c += 1;
      }
      if (this.productListCollection[i].Water_Needs == this.waterNeeds) {
        c += 1;
      }
      if (
        this.productListCollection[i].Appropriate_Location ==
        this.appropriateLocation
      ) {
        c += 1;
      }

      this.productListCollection[i].match = ((c / 7) * 100).toFixed(2);
    }
  }

  changeFunc() {
    this.filterButtonClicked = true;
  }
  getResponse(x) {
    console.log('clicked');
    this.filterButtonClicked = false;
  }

  removeFilters(){
    localStorage.removeItem('family');
    window.location.reload();
  }

  filter() {
    // this.familyName = this.productService.familyName;
    console.log('family: ' + this.familyName);
    // console.log(this.productListCollection);
    this.route.queryParamMap.subscribe((params) => {
      this.availability = params.get('availability');
      this.category = params.get('category');
      this.minRange = Number(params.get('minim'));
      this.maxRange = Number(params.get('maxim'));
      if (this.availability) {
        if (this.familyName === '' || this.familyName == null) {
          console.log('111');
          this.productService.getAll().subscribe(
            (x) => {
              this.filteredProducts = x;
            },
            (error) => {}
          );
        } else {
          console.log('2222');
          this.productService.getFamilyAvailableData(this.familyName).subscribe(
            (x) => {
              this.filteredProducts = x;
              console.log(this.filteredProducts);
            },
            (error) => {}
          );
        }
      } else if (this.category) {
        this.filteredProducts = this.productListCollection.filter(
          (p: { category: string }) =>
            // tslint:disable-next-line: triple-equals
            p.category.toLowerCase() == this.category.toLowerCase()
        );
      } else if (this.minRange >= 0 && this.maxRange > 0) {
        const arr = [];
        for (const pdt in this.productListCollection) {
          if (
            this.productListCollection[pdt].price >= this.minRange &&
            this.productListCollection[pdt].price <= this.maxRange
          ) {
            arr.push(this.productListCollection[pdt]);
          }
        }
        this.filteredProducts = arr;
      } else {
        this.filteredProducts = this.productListCollection;
      }
      // tslint:disable-next-line: triple-equals
      // console.log(this.filteredProducts);
      // tslint:disable-next-line: triple-equals
      this.filteredProducts = this.filteredProducts.sort(this.filteredProducts.match);
      this.filteredProducts.sort(function(a, b) {
        return b.match - a.match;
    });
    });
    this.searchResult = this.filteredProducts.length;
    console.log(this.searchResult);
  }
}
