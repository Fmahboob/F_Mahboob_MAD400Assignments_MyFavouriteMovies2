import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  newMovie: Content;
  tempTags: string = "";
  tempId: string = "";
  @Output() newMovieEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateMovieEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private movieService: MovieserviceService) { 
    this.newMovie = {title: "", description: "", creator: ""}
  }

  ngOnInit(): void {
  }
  modifyOrAddItemToParent(){
    if (this.tempId !== "") {
      this.newMovie.tags = this.tempTags ? this.tempTags.split(",") : [];
      this.newMovie.id = parseInt(this.tempId);
      // this.newMovie.id = parseInt(this.tempid);
      this.movieService.updateMovie(this.newMovie).subscribe(() => {
        this.updateMovieEvent.emit();
        this.newMovie = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.tempTags = "";
        this.tempId = "";
      });
    }
    else {
      this.newMovie.tags = this.tempTags ? this.tempTags.split(",") : [];
      // this.newMovie.id = parseInt(this.tempid);
      this.movieService.addMovie(this.newMovie).subscribe(newMovieFromServer => {
        this.newMovieEvent.emit(newMovieFromServer);
        this.newMovie = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.tempTags = "";
      });
    }
  }

  }


