import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { MoviestypesPipe } from './moviestypes.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessageComponent } from './messages/message/message.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    MoviestypesPipe,
    HoverAffectDirective,
    MessageComponent,
    ModifyContentComponentComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    
   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
     dataEncapsulation: false,
     delay: 1000
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
