import { Component, OnInit } from "@angular/core";
import { DataService, Books } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: Books[];
  cart: Books[];
  buttonText = "Add to cart";
  option = true;

  constructor(private service: DataService) {
    this.data = this.service.books;
    this.cart = [];
  }

  ngOnInit() {}

  getBook(id: Books) {
    this.service.getBook(id);
  }
}
