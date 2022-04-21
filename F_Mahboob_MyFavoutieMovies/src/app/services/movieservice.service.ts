import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ALLMOVIES } from '../helper-files/ContentDb';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(
    ) { }

  getMovie(): Observable<Content[]>{

    return of(ALLMOVIES)
  }

  getMovieItem(id: number):Observable<Content>{

    return of(ALLMOVIES[id]);
  }

  
}


