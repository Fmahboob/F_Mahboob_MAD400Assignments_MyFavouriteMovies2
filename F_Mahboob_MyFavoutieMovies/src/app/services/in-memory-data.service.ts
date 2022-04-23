import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api"
import { Content } from '../helper-files/content-interface';
import { ALLMOVIES } from '../helper-files/ContentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const movie: Content[] = ALLMOVIES;
    return {movie};

  }

  

  genId(movie: Content[]): number{
    return movie.length > 0 ? Math.max(...movie.map(m => m.id ?? 0)) + 1 : 0;
  }
}
