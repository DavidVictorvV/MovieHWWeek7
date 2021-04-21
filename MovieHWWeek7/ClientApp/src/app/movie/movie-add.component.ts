import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html'
})
export class MovieAddComponent {
  public movie: Movie = <Movie>{};

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
  }

  public saveMovie() {
    this.http.post(this.baseUrl + 'api/movies', this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies")
    }, error => console.error(error));
  }
}


