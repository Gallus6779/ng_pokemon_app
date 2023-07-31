import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  // template : `Bonjour`,
  templateUrl : './app.pokemonlist.html'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(PokemonId : string){
    // const id: number = + (event.target as HTMLInputElement).value;
    // const id: number = +PokemonId;
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +PokemonId);
    if(pokemon){
      console.log(`Vous avez clique sur pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log('Undefined');
      this.pokemonSelected = pokemon;
    }
  }

  displayText(event: MouseEvent){
    alert( (event.target as HTMLInputElement).value);
  }
}
