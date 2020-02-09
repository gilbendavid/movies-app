import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  constructor() {}

  @Input()
  caption: string;
  @Input()
  poster: string;
  @Input()
  description: string;

  ngOnInit() {}
}
