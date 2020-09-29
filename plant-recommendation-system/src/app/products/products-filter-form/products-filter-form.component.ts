import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-filter-form',
  templateUrl: './products-filter-form.component.html',
  styleUrls: ['./products-filter-form.component.css']
})
export class ProductsFilterFormComponent implements OnInit {

  filter:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.filter);
  }

}
