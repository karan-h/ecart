import { Injectable } from "@angular/core";
export interface Books {
  name: string;
  category: string;
  price: string | number;
  id: number;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  books: Books[] = [
    { name: "book1", category: "scifi", price: "10", id: 1 },
    { name: "book2", category: "horror", price: "11", id: 2 },
    { name: "book3", category: "action", price: "12", id: 3 },
    { name: "book4", category: "comedy", price: "13", id: 4 },
    { name: "book5", category: "scifi", price: "14", id: 5 }
  ];
  cart: Books[] = [];
  constructor() {}

  getBook(book: Books) {
    this.cart.push(book);
  }
}
