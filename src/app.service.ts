import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Pokemon } from './pokemon';
import axios from 'axios';

import { PokemonService } from './pokemon.service';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello, world!";
  }

  async getPokemon():Promise<Pokemon[]> {
    let http = new HttpService()
    let pokemon = new PokemonService(http)
    return await pokemon.findAll();
  }
}
