import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'products-filter-form',
  templateUrl: './products-filter-form.component.html',
  styleUrls: ['./products-filter-form.component.css']
})
export class ProductsFilterFormComponent implements OnInit {

  filter:any = {};
  cols=['plant_type_Grass', 'plant_type_Perennial', 'plant_type_Shrub (deciduous)', 'plant_type_Shrub (evergreen)', 'plant_type_Succulent', 'plant_type_Tree (deciduous)', 'plant_type_Tree (evergreen)', 'plant_type_Vine', 'bloom_time_Fall;Winter', 'bloom_time_Spring', 'bloom_time_Spring;Fall', 'bloom_time_Spring;Summer', 'bloom_time_Spring;Summer;Fall', 'bloom_time_Spring;Summer;Fall;Winter', 'bloom_time_Spring;Summer;Winter', 'bloom_time_Spring;Winter', 'bloom_time_Summer', 'bloom_time_Summer;Fall', 'bloom_time_Summer;Fall;Winter', 'bloom_time_Winter', 'size_at_maturity_13-24 ft', 'size_at_maturity_4-6 ft', 'size_at_maturity_7-12 ft', 'size_at_maturity_< 1 ft', 'size_at_maturity_> 24 ft', 'suitable_site_conditions_Part Shade;Shade', 'suitable_site_conditions_Shade', 'suitable_site_conditions_Sun', 'suitable_site_conditions_Sun;Part Shade',	'suitable_site_conditions_Sun;Part Shade;Shade', 'suitable_site_conditions_Sun;Shade',	'soil_type_Clay;Loam',	'soil_type_Clay;Loam;Rock', 'soil_type_Clay;Loam;Sand',	'soil_type_Clay;Loam;Sand;Chalk',	'soil_type_Clay;Loam;Sand;Rock',	'soil_type_Clay;Rock', 'soil_type_Clay;Sand',	'soil_type_Loam',	'soil_type_Rock',	'soil_type_Sand',	'soil_type_Sand;Loam',	'soil_type_Sand;Loam;Chalk', 'water_needs_Moderate',	'water_needs_None',	'appropriate_location_Garden',	'appropriate_location_Garden;Roof', 'appropriate_location_Garden;Sidewalk',	'appropriate_location_Garden;Sidewalk;Roof',	'appropriate_location_Sidewalk'];
  values=[];
  // tslint:disable-next-line: no-input-rename
  @Output() filterButtonClick = new EventEmitter<string>();
  constructor() { 
    this.initializeArray();
  }

  ngOnInit(): void {
  
  }

  initializeArray(){
    for(var i=0;i<50;i++){
      this.values[i]=0;
    }
  }

  save(){
    console.log(this.filter);
    this.initializeArray();
    for(var i=0;i<8;i++){
      if('plant_type_' + this.filter.plant_type == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for (var i = 8; i < 20; i++){
      if('bloom_time_' + this.filter.bloom_time == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for (var i = 20; i < 25; i++){
      if('size_at_maturity_' + this.filter.size_at_maturity == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for(var i=25;i<31;i++){
      if('suitable_site_conditions_' + this.filter.suitable_site_conditions == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for(var i=31;i<43;i++){
      if('soil_type_' + this.filter.soil_type == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for(var i=43;i<45;i++){
      if('water_needs_' + this.filter.water_needs == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    for(var i=45;i<50;i++){
      if('appropriate_location_' + this.filter.appropriate_location == this.cols[i]){
        this.values[i] = 1;
        break;
      }
    }
    console.log(this.values);
  }

  cancel(){
    this.filterButtonClick.emit('false');
    console.log("here");
  }
}
