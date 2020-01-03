import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Books } from "../data.service";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.css"]
})
export class BookCardComponent implements OnInit {
  @Input() book: Books;
  @Input() option: boolean;
  @Input() buttonText: string;
  @Output() bookId = new EventEmitter<Books>();

  constructor() {}

  ngOnInit() {}

  addToCart() {
    this.bookId.emit(this.book);
  }
}
