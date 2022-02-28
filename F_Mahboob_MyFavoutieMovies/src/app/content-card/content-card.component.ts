import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input()
  movie?: Content;
 

  constructor() {

    let theroyaltreatment : Content;
    theroyaltreatment = {
      id: 0,
      title: 'The Royal Treatment',
      description: 'New York hairdresser Izzy seizes the chance to work at the wedding of a charming prince. When sparks start to fly between the two of them, love and duty are put to the test as the time of the wedding draws closer.',
      creator: 'Rick Jacobson',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BNjc5ZTg0MjgtOGFiNy00YjE5LThlZmYtMzE3NjViZWI2OTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      type: 'romantic comedy',
      tags: ["Laura Marano"]
    }

    let it : Content;
    it = {
      id: 1,
      title: 'It',
      description: 'Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.',
      creator: 'Andy Muschietti',
      imgURL: 'https://m.media-amazon.com/images/I/61LokfYMGnL._AC_SY679_.jpg',
      type: 'horror',
      tags: ["Bill Skarsgard"]

    }

    let homeAlone : Content;
    homeAlone = {
      id: 2,
      title: 'Home Alone',
      description: 'When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.',
      creator: 'Chris Columbus',
      imgURL: 'https://m.media-amazon.com/images/I/A1T+lZ6iUZL._AC_SL1500_.jpg',
      type: 'comedy'
      
    }


   
   }

  

  ngOnInit(): void {
  }

  
}
