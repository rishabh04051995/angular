import { Component,Inject,OnInit } from '@angular/core';
import { Hero} from './hero'
import { HeroServiceService } from './hero-service/hero-service.service';
/*const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [HeroServiceService]
})
export class AppComponent implements OnInit {
/*	public selectedHeroName:string='';
	  title = 'Tour of heroes';                                      //imp
  heroes:Hero[];
  constructor(private heroService: HeroServiceService) { }*/

ngOnInit(): void {
  /* this.heroes = this.heroService.getHeroes();*/                //imp
}

 /*hero:Hero ={
	id:1,
	name:'akshay kumar'*/
};
/*selectedHero:Hero;
onSelect(hero:Hero){
console.log('hero');
console.log(hero);                                           //imp
	this.selectedHero = hero;
	this.selectedHeroName=hero.name;
}
}
*/
