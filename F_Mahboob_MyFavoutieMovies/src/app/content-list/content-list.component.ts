
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  allMovies: Content[]; 
  titleFound?: boolean;
 

  constructor(private movieService: MovieserviceService, private messageService: MessageService)  { 
    this.allMovies = [];
  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(listOfMovie =>{
      this.allMovies = listOfMovie;
      this.messageService.add("List loaded sucessfully")
    } );
  }

  checkForTitle(title: string): void{
    
      
    if (this.allMovies.some(t => t.title === title)){
      this.titleFound = true;
    }
    else{
      this.titleFound = false
    }
    
}

  addMovieToList(newMovie: Content): void{
        this.messageService.add("New content added and displayed on list and Id number is " + newMovie.id);

  this.movieService.getMovie().subscribe(listOfMovies => {
    this.allMovies = listOfMovies;
    this.messageService.add("New content added and displayed on list")
  });
    
  }

  updateMovieToList(): void{
    this.movieService.getMovie().subscribe(listOfMovies => {
      this.allMovies = listOfMovies;
      this.messageService.add("Content on the list Updated")
    })

  }

}