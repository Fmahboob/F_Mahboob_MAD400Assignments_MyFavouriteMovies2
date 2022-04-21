import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageComponent } from './messages/message/message.component';
import { MessageService } from './services/message.service';
import { MovieserviceService } from './services/movieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'F_Mahboob_MyFavoutieMovies';

    individualMovie?: Content;
  
  constructor(private movieService: MovieserviceService, private messageService: MessageService){
    
  }

  ngOnInit(): void{

    this.movieService.getMovieItem(3).subscribe(
      movieAtIndex => this.individualMovie = movieAtIndex
    );
  }
  displayItem(id: string): void{
    if(parseInt(id)){
      this.messageService.add("please Enter a number value")
      return;
    }
    let idNumber = parseInt(id);
    this.movieService.getMovie().subscribe(movieArray => {
      let movieInArray = movieArray.find(individualMovie => individualMovie.id === idNumber);
      if(!movieInArray){
         this.messageService.add("Please enter a number value for a valid id");

      }else{
         this.individualMovie = movieInArray;
      }
      
     
    })
  }
}
