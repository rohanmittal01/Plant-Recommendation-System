import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl;
  familyName="";
  constructor(private http: HttpClient) { }

  create(product){
    return this.http.post(this.baseUrl + 'products', product);
  }

  getAll(){
    return this.http.get(this.baseUrl + 'products/available');
  }

  getAllProducts(){
    return this.http.get(this.baseUrl + 'products/all');
  }

  getUsingAI(arr){
    // return this.http.get('http://localhost:5000/');
    // console.log('http://localhost:5000/predict'+'?plant_type_Grass='+arr[0]+ '&plant_type_Perennial='+arr[1]+ '&plant_type_Shrub (deciduous)='+arr[2]+ '&plant_type_Shrub (evergreen)='+arr[3]+ '&plant_type_Succulent='+arr[4]+ '&plant_type_Tree (deciduous)='+arr[5]+ '&plant_type_Tree (evergreen)='+arr[6]+ '&plant_type_Vine='+arr[7]+'&bloom_time_Fall;Winter='+arr[8]+ '&bloom_time_Spring='+arr[9]+ '&bloom_time_Spring;Fall='+arr[10]+ '&bloom_time_Spring;Summer='+arr[11]+ '&bloom_time_Spring;Summer;Fall='+arr[12]+ '&bloom_time_Spring;Summer;Fall;Winter='+arr[13]+ '&bloom_time_Spring;Summer;Winter='+arr[14]+ '&bloom_time_Spring;Winter='+arr[15]+ '&bloom_time_Summer='+arr[16]+ '&bloom_time_Summer;Fall='+arr[17]+ '&bloom_time_Summer;Fall;Winter='+arr[18]+ '&bloom_time_Winter='+arr[19]+ '&size_at_maturity_13-24 ft='+arr[20]+ '&size_at_maturity_4-6 ft='+arr[21]+ '&size_at_maturity_7-12 ft='+arr[22]+ '&size_at_maturity_< 1 ft='+arr[23]+ '&size_at_maturity_> 24 ft='+arr[24]+ '&suitable_site_conditions_Part Shade;Shade='+arr[25]+ '&suitable_site_conditions_Shade='+arr[26]+ '&suitable_site_conditions_Sun='+arr[27]+ '&suitable_site_conditions_Sun;Part Shade='+arr[28]+	'&suitable_site_conditions_Sun;Part Shade;Shade='+arr[29]+ '&suitable_site_conditions_Sun;Shade='+arr[30]+	'&soil_type_Clay;Loam='+arr[31]+	'&soil_type_Clay;Loam;Rock='+arr[32]+ '&soil_type_Clay;Loam;Sand='+arr[33]+	'&soil_type_Clay;Loam;Sand;Chalk='+arr[34]+	'&soil_type_Clay;Loam;Sand;Rock='+arr[35]+	'&soil_type_Clay;Rock='+arr[36]+ '&soil_type_Clay;Sand='+arr[37]+	'&soil_type_Loam='+arr[38]+	'&soil_type_Rock='+arr[39]+	'&soil_type_Sand='+arr[40]+	'&soil_type_Sand;Loam='+arr[41]+	'&soil_type_Sand;Loam;Chalk='+arr[42]+ '&water_needs_Moderate='+arr[43]+	'&water_needs_None='+arr[44]+	'&appropriate_location_Garden='+arr[45]+	'&appropriate_location_Garden;Roof='+arr[46]+ '&appropriate_location_Garden;Sidewalk='+arr[47]+	'&appropriate_location_Garden;Sidewalk;Roof='+arr[48]+	'&appropriate_location_Sidewalk='+arr[49])
    return this.http.get('http://localhost:5000/predict'+'?plant_type_Grass='+arr[0]+ '&plant_type_Perennial='+arr[1]+ '&plant_type_Shrub (deciduous)='+arr[2]+ '&plant_type_Shrub (evergreen)='+arr[3]+ '&plant_type_Succulent='+arr[4]+ '&plant_type_Tree (deciduous)='+arr[5]+ '&plant_type_Tree (evergreen)='+arr[6]+ '&plant_type_Vine='+arr[7]+'&bloom_time_Fall;Winter='+arr[8]+ '&bloom_time_Spring='+arr[9]+ '&bloom_time_Spring;Fall='+arr[10]+ '&bloom_time_Spring;Summer='+arr[11]+ '&bloom_time_Spring;Summer;Fall='+arr[12]+ '&bloom_time_Spring;Summer;Fall;Winter='+arr[13]+ '&bloom_time_Spring;Summer;Winter='+arr[14]+ '&bloom_time_Spring;Winter='+arr[15]+ '&bloom_time_Summer='+arr[16]+ '&bloom_time_Summer;Fall='+arr[17]+ '&bloom_time_Summer;Fall;Winter='+arr[18]+ '&bloom_time_Winter='+arr[19]+ '&size_at_maturity_13-24 ft='+arr[20]+ '&size_at_maturity_4-6 ft='+arr[21]+ '&size_at_maturity_7-12 ft='+arr[22]+ '&size_at_maturity_< 1 ft='+arr[23]+ '&size_at_maturity_> 24 ft='+arr[24]+ '&suitable_site_conditions_Part Shade;Shade='+arr[25]+ '&suitable_site_conditions_Shade='+arr[26]+ '&suitable_site_conditions_Sun='+arr[27]+ '&suitable_site_conditions_Sun;Part Shade='+arr[28]+	'&suitable_site_conditions_Sun;Part Shade;Shade='+arr[29]+ '&suitable_site_conditions_Sun;Shade='+arr[30]+	'&soil_type_Clay;Loam='+arr[31]+	'&soil_type_Clay;Loam;Rock='+arr[32]+ '&soil_type_Clay;Loam;Sand='+arr[33]+	'&soil_type_Clay;Loam;Sand;Chalk='+arr[34]+	'&soil_type_Clay;Loam;Sand;Rock='+arr[35]+	'&soil_type_Clay;Rock='+arr[36]+ '&soil_type_Clay;Sand='+arr[37]+	'&soil_type_Loam='+arr[38]+	'&soil_type_Rock='+arr[39]+	'&soil_type_Sand='+arr[40]+	'&soil_type_Sand;Loam='+arr[41]+	'&soil_type_Sand;Loam;Chalk='+arr[42]+ '&water_needs_Moderate='+arr[43]+	'&water_needs_None='+arr[44]+	'&appropriate_location_Garden='+arr[45]+	'&appropriate_location_Garden;Roof='+arr[46]+ '&appropriate_location_Garden;Sidewalk='+arr[47]+	'&appropriate_location_Garden;Sidewalk;Roof='+arr[48]+	'&appropriate_location_Sidewalk='+arr[49]);
  }

  get(id){
    return this.http.get(this.baseUrl + 'products/' + id);
  }

  update(id, product){
    return this.http.patch(this.baseUrl + 'products/' + id, product);
  }

  delete(id){
    return this.http.delete(this.baseUrl + 'products/' + id);
  }

  addToCart(id){

  }
}
