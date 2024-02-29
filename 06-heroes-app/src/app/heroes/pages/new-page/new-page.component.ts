import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../components/confirmDeleteDialog/confirmDeleteDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  public creatorsList = [
    { 'id': 'DC Comics', 'value': 'DC - Comics' },
    { 'id': 'Marvel Comics', 'value': 'Marvel - Comics' }
  ];

  public heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>(Publisher.MarvelComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl('')
  });

  constructor(
    private heroesService : HeroService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private snackBar: MatSnackBar,
    public  dialog: MatDialog,
  ){}

  ngOnInit(): void {

    if ( !this.router.url.includes("edit")) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ) )
      )
      .subscribe( hero => {
        if (!hero) return this.router.navigateByUrl('/');
        return this.heroForm.reset( hero );
      })

  }

  get currentHero() : Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(){
    const hero : Hero = this.currentHero;

    if ( this.heroForm.invalid ) return;

    if ( hero.id ) {
      this.heroesService.updateHero( hero )
        .subscribe( hero => {
          this.openSnackBar(`Se modifico el heroe ${hero.superhero} con exito!`);
        }
      );
      return;
    }

    this.heroesService.addHero( hero )
      .subscribe( hero => {
        this.openSnackBar(`Se agrego el heroe ${hero.superhero} con exito!`);
        this.router.navigateByUrl(`/heroes/${hero.id}`)
      })
  }

  onDeleteHero() : void{

    if (!this.currentHero.id) throw Error('Hero ID is required.')

    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: this.heroForm.value
    })

    dialogRef.afterClosed()
      .pipe(
        filter( (result : boolean) => result),
        switchMap( () => this.heroesService.deleteHero( this.currentHero.id )),
        filter( (wasDeleted : boolean) => wasDeleted),
        tap( wasDeleted => console.log(wasDeleted)),
      )
      .subscribe( result => {
        this.router.navigateByUrl('/heroes/list')
      })

    /* dialogRef.afterClosed()
      .subscribe( result => {
        if ( !result ) return;
        this.heroesService.deleteHero( this.currentHero.id ).subscribe(result => {
          if (result) this.router.navigateByUrl('/heroes/list');
        });
      }) */

  }

  openSnackBar(message: string) : void{
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

}
