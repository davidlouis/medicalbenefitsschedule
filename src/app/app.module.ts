import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component/app.component';
import { SearchComponent } from './search.component/search.component';
import { ItemService } from './item/item.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemService]
})
export class AppModule { }
