import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  newMovie!: Content;
  temptags: string = "";
  tempid: string = "";
  errorMessage = "";
  @Output() newMovietEvent: EventEmitter<Content> = new EventEmitter<Content>();
  

  constructor() {
    this.newMovie = {id: 2, title: "", description: "", creator: ""}
   }

  ngOnInit(): void {
  }

  addItemToParent(): void{
    var addMoviePromise = new Promise((success, fail) => {
      if(!this.tempid || !this.newMovie.title || this.newMovie.description || this.newMovie.creator){
        fail("Please enter the reqiure information")
      }
      this.newMovie.tags = this.temptags ? this.temptags.split(",") :[];
      this.newMovie.id = parseInt(this.tempid);
      this.newMovietEvent.emit(this.newMovie);
      success("Movie added successfully, id:  " + this.newMovie.id + "Title " + this.newMovie.title);
    });
    addMoviePromise.then(message =>{
      console.log(message);
      this.newMovie = {id: 2, title: "", description: "", creator: "", imgURL: "", type: "", tags: []};
      this.temptags = "";
      this.tempid = "";
      this.errorMessage = "";
    }).catch(message =>{
      this.errorMessage = message;
    })
  }

}
