import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  constructor(
    private heroesService : HeroService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ){}

  public hero? : Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(250),
        switchMap( ({id}) =>  this.heroesService.getHeroById(id)),
      )
      .subscribe( hero => {

        if (!hero) return this.router.navigate(['/heroes/list']);

        return this.hero = hero;

      })
  }

  public goBack() : void{
    this.router.navigateByUrl('/heroes/list');
  }


}
