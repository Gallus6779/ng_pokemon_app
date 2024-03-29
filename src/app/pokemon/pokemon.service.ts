import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante', 
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electric', 
      'Poison',
      'Fee',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}