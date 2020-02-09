import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Movie } from "../../models/movie";
import { ALL_MOVIES } from "../../models/all-movies";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  captions: string[] = [];
  moviesList: Movie[] = [];
  isBusy: boolean = false;

  constructor(private data: DataService) {}

  async ngOnInit() {
    this.isBusy = true;
    this.captions = await this.data.getAllCaptions();
    this.isBusy = false;
    this.moviesList = ALL_MOVIES;
  }

  @Output()
  selectionRequested = new EventEmitter<Movie>();

  onSelect(value: Movie) {
    this.selectionRequested.emit(value);
  }
}
