import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  public movies: Movie[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadMovies();
  }

  public deleteMovie(movie: Movie) {
    this.http.delete(this.baseUrl + 'api/movies/' + movie.id).subscribe(result => {
      this.loadMovies();
    }, error => console.error(error))
  }

  loadMovies() {
    this.http.get<Movie[]>(this.baseUrl + 'api/movies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }
}
