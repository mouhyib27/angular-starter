import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleted(deletedItem: any){
    this.items = this.items.filter(item => item !== deletedItem);
  }

}
