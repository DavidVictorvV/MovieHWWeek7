import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html'
})
export class MovieUpdateComponent {

  public movie: Movie = <Movie>{};
  public id: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInnit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadMovie();
    })
  }

  public loadMovie() {
    this.http.get<Movie>(this.baseUrl + 'api/movies/' + this.id).subscribe(result => {
      this.movie = result;
    }, error => console.error(error))
  }

  public updateMovie() {
    this.http.put<Movie>(this.baseUrl + 'api/movies/' + this.id, this.movie).subscribe(result => {
      this.router.navigateByUrl("")
    }, error => console.error(error))
  }
}


