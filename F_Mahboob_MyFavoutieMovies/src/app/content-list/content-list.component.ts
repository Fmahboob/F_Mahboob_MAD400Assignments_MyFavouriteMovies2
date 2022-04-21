
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  allMovies: Content[] = []; 
  titleFound?: boolean;
 

  constructor(private movieService: MovieserviceService)  { 

  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(movie => this.allMovies = movie)
  }

  checkForTitle(title: string): void{
    
      
    if (this.allMovies.some(t => t.title === title)){
      this.titleFound = true;
    }
    else{
      this.titleFound = false
    }
    
   
}


}