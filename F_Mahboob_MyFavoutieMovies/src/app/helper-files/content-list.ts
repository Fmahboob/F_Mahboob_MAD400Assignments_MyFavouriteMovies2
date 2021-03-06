
import { Content } from "./content-interface";

export class ContentList{
    private _items: Content[] = [];
    
    static count = 0;
    detail = "";

    Constructor(){
        this._items = [];
    }

    get items(): Content[] {
        return this._items;
    }

    addMovie(newMovie: Content){
        this._items.push(newMovie)
        this.noOfItems

    }

    noOfItems(){
        return ++ContentList.count;
    }

    movieInformation(myMovie: Content): string{
     this.detail = "<h4>" + myMovie.title + "</h4>This is one of my Favourite movie. Poster of movie is " + myMovie.imgURL + " The director of this movie is " + myMovie.creator + ". This movie is about " + myMovie.description + ". Famous actors are " + myMovie.tags
     return this.detail;

    }

   
}

 


