import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinelistComponent } from './components/winelist/winelist.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {HttpClientModule} from '@angular/common/http';
import { BeerlistComponent } from './components/beerlist/beerlist.component'

@NgModule({
  declarations: [
    AppComponent,
    WinelistComponent,
    SearchbarComponent,
    BeerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
