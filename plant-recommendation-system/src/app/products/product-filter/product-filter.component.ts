import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories: any[];
  subscribe2: Subscription;
  @Input('avialability') availability: any;
  @Input('range') range: any = {};
  // range: {min: number, max: number} = {min: 0, max: 1000};
  // @Input('min') min: any;
  // @Input('max') max: any;
  constructor() {

  }

  print(){
    // console.log(this.range);
  }

  
  ngOnInit(): void {
  }

}
