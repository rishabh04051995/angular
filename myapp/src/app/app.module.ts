import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // for ng module
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroServiceService} from './hero-service/hero-service.service';
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
