import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Welcome to {{pokemonList[1]}}!</h1>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit{
  pokemonList = [
    'Salameche',
    'Bulbizarre',
    'Carapuce'
  ];

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon('bulbizarre');
  }

  selectPokemon(pokemonName: string){
    console.log(`Vous avez cliquer sur le pokemon ${pokemonName}`);
  }
}
