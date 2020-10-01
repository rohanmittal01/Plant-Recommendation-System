import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'products-filter-form',
  templateUrl: './products-filter-form.component.html',
  styleUrls: ['./products-filter-form.component.css']
})
export class ProductsFilterFormComponent implements OnInit {

  filter: any = {};
  // tslint:disable-next-line: max-line-length
  cols = ['plant_type_Grass', 'plant_type_Perennial', 'plant_type_Shrub (deciduous)', 'plant_type_Shrub (evergreen)', 'plant_type_Succulent', 'plant_type_Tree (deciduous)', 'plant_type_Tree (evergreen)', 'plant_type_Vine', 'bloom_time_Fall;Winter', 'bloom_time_Spring', 'bloom_time_Spring;Fall', 'bloom_time_Spring;Summer', 'bloom_time_Spring;Summer;Fall', 'bloom_time_Spring;Summer;Fall;Winter', 'bloom_time_Spring;Summer;Winter', 'bloom_time_Spring;Winter', 'bloom_time_Summer', 'bloom_time_Summer;Fall', 'bloom_time_Summer;Fall;Winter', 'bloom_time_Winter', 'size_at_maturity_13-24 ft', 'size_at_maturity_4-6 ft', 'size_at_maturity_7-12 ft', 'size_at_maturity_< 1 ft', 'size_at_maturity_> 24 ft', 'suitable_site_conditions_Part Shade;Shade', 'suitable_site_conditions_Shade', 'suitable_site_conditions_Sun', 'suitable_site_conditions_Sun;Part Shade',	'suitable_site_conditions_Sun;Part Shade;Shade', 'suitable_site_conditions_Sun;Shade',	'soil_type_Clay;Loam',	'soil_type_Clay;Loam;Rock', 'soil_type_Clay;Loam;Sand',	'soil_type_Clay;Loam;Sand;Chalk',	'soil_type_Clay;Loam;Sand;Rock',	'soil_type_Clay;Rock', 'soil_type_Clay;Sand',	'soil_type_Loam',	'soil_type_Rock',	'soil_type_Sand',	'soil_type_Sand;Loam',	'soil_type_Sand;Loam;Chalk', 'water_needs_Moderate',	'water_needs_None',	'appropriate_location_Garden',	'appropriate_location_Garden;Roof', 'appropriate_location_Garden;Sidewalk',	'appropriate_location_Garden;Sidewalk;Roof',	'appropriate_location_Sidewalk'];
  values = [];
  family: any;
  // tslint:disable-next-line: no-input-rename
  @Output() filterButtonClick = new EventEmitter<string>();
  constructor(private productService: ProductService, private alertify: AlertifyService, private route: Router) {
    this.initializeArray();
  }

  ngOnInit(): void {
  }

  initializeArray(){
    for (let i = 0; i < 50; i++){
      this.values[i] = 0;
    }
  }

  save(){
    console.log(this.filter);
    this.initializeArray();
    for (let i = 0; i < 8; i++){
      // tslint:disable-next-line: triple-equals
      if ('plant_type_' + this.filter.plant_type == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nplant_type_' + this.filter.plant_type);
        break;
      }
    }
    for (let i = 8; i < 20; i++){
      // tslint:disable-next-line: triple-equals
      if ('bloom_time_' + this.filter.bloom_time == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nbloom_time_' + this.filter.bloom_time);
        break;
      }
    }
    for (let i = 20; i < 25; i++){
      // tslint:disable-next-line: triple-equals
      if ('size_at_maturity_' + this.filter.size_at_maturity == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nsize_at_maturity_' + this.filter.size_at_maturity);
        break;
      }
    }
    for (let i = 25; i < 31; i++){
      // tslint:disable-next-line: triple-equals
      if ('suitable_site_conditions_' + this.filter.suitable_site_conditions == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nsuitable_site_conditions_' + this.filter.suitable_site_conditions);
        break;
      }
    }
    for (let i = 31; i < 43; i++){
      // tslint:disable-next-line: triple-equals
      if ('soil_type_' + this.filter.soil_type == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nsoil_type_' + this.filter.soil_type);
        break;
      }
    }
    for (let i = 43; i < 45; i++){
      // tslint:disable-next-line: triple-equals
      if ('water_needs_' + this.filter.water_needs == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nwater_needs_' + this.filter.water_needs);
        break;
      }
    }
    for (let i = 45; i < 50; i++){
      // tslint:disable-next-line: triple-equals
      if ('appropriate_location_' + this.filter.appropriate_location == this.cols[i]){
        this.values[i] = 1;
        // console.log('\nappropriate_location_' + this.filter.appropriate_location);
        break;
      }
    }
    this.productService.getUsingAI(this.values).subscribe(x => {
      this.family = x;
      // console.log(this.family);
    }, error => {
      this.alertify.error(error.error.text);
      // console.log(error);
      this.productService.familyName = error.error.text;
      localStorage.setItem('family', error.error.text);
      this.f1().then(res => this.f2());
    });
    // console.log(this.values);

  }

f1() {
    return new Promise((resolve, reject) => {
        console.log('f1');
        setTimeout( () => {
          resolve();
      }, 1500);
    });
}

f2() {
   console.log('f2');
   window.location.reload();
}
cancel(){
    this.filterButtonClick.emit('false');
    // console.log("here");
  }
}



