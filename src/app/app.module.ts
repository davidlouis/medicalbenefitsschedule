import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component/app.component';
import { SearchComponent } from './search.component/search.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
