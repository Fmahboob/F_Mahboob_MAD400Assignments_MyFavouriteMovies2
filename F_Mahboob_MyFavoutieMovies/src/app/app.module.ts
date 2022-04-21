import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { MoviestypesPipe } from './moviestypes.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessageComponent } from './messages/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    MoviestypesPipe,
    HoverAffectDirective,
    MessageComponent, 
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
