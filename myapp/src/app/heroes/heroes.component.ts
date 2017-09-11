import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero'
import { HeroServiceService } from '../hero-service/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
   providers: [HeroServiceService]
})
export class HeroesComponent implements OnInit {

  public selectedHeroName:string='';
	  title = 'Tour of heroes';
  heroes:Hero[];
  constructor(private heroService: HeroServiceService) { }

ngOnInit(): void {
   this.heroes = this.heroService.getHeroes();
}

 /*hero:Hero ={
	id:1,
	name:'akshay kumar'
};*/
selectedHero:Hero;
onSelect(hero:Hero){
/*console.log('hero');
console.log(hero);*/
	this.selectedHero = hero;
	this.selectedHeroName=hero.name;
}
}