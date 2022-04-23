import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ALLMOVIES } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  constructor(private messageService: MessageService, private http : HttpClient) { }

  getMovie(): Observable<Content[]>{
    this.messageService.add("Content array loading")
    return this.http.get<Content[]>("api/movie")
  }

  getMovieItem(id: number):Observable<Content>{
    this.messageService.add("Content array loading")
    return this.http.get<Content>("api/movie" + id);
  }
  addMovie(newMovieItem: Content): Observable<Content>{
    this.messageService.add("Adding new content to the server!");
    return this.http.post<Content>("api/movie", newMovieItem, this.httpOptions);

  }

  updateMovie(contentItem: Content): Observable<any>{
    this.messageService.add("Updating content on the server, id: " + contentItem.id);
    return this.http.put("api/movie", contentItem, this.httpOptions);
    }
  
}


