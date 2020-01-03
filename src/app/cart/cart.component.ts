import { Component, OnInit } from "@angular/core";
import { DataService, Books } from "../data.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Books[];
  option: false;
  constructor(private service: DataService) {
    this.cart = service.cart;
  }

  ngOnInit() {}
}
