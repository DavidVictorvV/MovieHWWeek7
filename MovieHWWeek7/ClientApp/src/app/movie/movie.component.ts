import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movie[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Movie[]>(baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}

interface Movie {
  id: string;
  movieName: string;
  genre: string;
  movieLength: number;
  releaseDate: number;
}
