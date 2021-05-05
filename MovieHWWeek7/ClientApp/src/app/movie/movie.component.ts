import {Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component'
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['StyleSheet.css']
})
export class MovieComponent {
  public movies: Movie[];
  displayedColumns: string[] = ['id', 'movieName', 'genre', 'movieLength', 'releaseDate', 'edit', 'delete'];
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


