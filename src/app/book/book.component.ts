import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService, Books } from "../data.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  id: number;
  books: Books[];
  constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.params.subscribe(params => (this.id = params.book));
    this.books = service.books;
  }

  ngOnInit() {}
}
