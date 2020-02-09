import { Component } from "@angular/core";
import { Movie } from "./models/movie";
import { ALL_MOVIES } from "./models/all-movies";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isBusy: boolean = false;
  isUserSelect: boolean = false;
  currentMovie: Movie = ALL_MOVIES[0];

  constructor(private data: DataService) {}

  async setCurrentMovie(value: Movie) {
    this.isBusy = true;
    this.currentMovie = await this.data.getMovie(value.caption);
    this.isBusy = false;
    this.isUserSelect = true;
  }
}
