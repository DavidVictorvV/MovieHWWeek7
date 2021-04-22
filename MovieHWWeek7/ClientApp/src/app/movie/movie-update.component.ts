import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html'
})
export class MovieUpdateComponent implements OnInit{
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute  ) { }

  public id: string;
  public movie: Movie = <Movie>{};

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadMovie();
    });

  }

  public loadMovie() {
    this.http.get<Movie>(this.baseUrl + 'api/movies/' + this.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error))
  }

  public updateMovie() {
    this.http.put<Movie>(this.baseUrl + 'api/movies/' + this.id, this.movie).subscribe(result => {
    this.router.navigateByUrl("/movies")
    }, error => console.error(error))
  }
}
