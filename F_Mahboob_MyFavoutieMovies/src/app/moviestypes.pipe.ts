
import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'moviestypes'
})
export class MoviestypesPipe implements PipeTransform {

  transform(movieList: Content[], type?: string) {
    return movieList.filter(movies =>  movies.type == type ? movieList: null);

}
}


