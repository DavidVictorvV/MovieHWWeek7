import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html'
})
export class MovieUpdateComponent {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
  }

  public updateMovie(movie: Movie) {
    this.http.put(this.baseUrl + 'api/movies', movie).subscribe(result => {
      this.router.navigateByUrl("/movies")
    }, error => console.error(error))
  }
}


