import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent{
  pokemonList: Pokemon[];

  pokemonSelected: Pokemon | undefined;

  constructor(
    private router: Router, 
    private PokemonService: PokemonService
    ) {}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  ngOnInit() {
    this.pokemonList = this.PokemonService.getPokemonList();
  }
}
