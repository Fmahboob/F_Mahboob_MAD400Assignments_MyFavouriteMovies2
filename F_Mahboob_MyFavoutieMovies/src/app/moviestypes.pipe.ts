
import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'moviestypes'
})
export class MoviestypesPipe implements PipeTransform {
  

// if type is not passed in, return movies that have no type set
// if the type is passed in, but an empty string, return all the movies that have a type set to anything
// if the type is passed in and is any value except empty string, return the movies with type equal to that type value
  transform(movieList: Content[], type?: string) {
    return movieList.filter(movies => {
     
      if (type === ""){
        
        return movieList.filter(movie => movie.type === "")
      }
      else if (type === type){
        return movieList.filter(movie => movie.type === type)
        
      }
      else if (type === null){
        return movieList.filter(movie => movie.type === null)
      }

      else {
        return movieList
        
      }
    })

  

}

}


