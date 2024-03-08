import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Pokemon } from './pokemon';
import axios from 'axios';
// import { PokemonService } from './pokemon.service';
import { AxiosResponse } from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello, world!";
  }
}
  export class PokemonService {
    constructor(private readonly httpService: HttpService) {}
    findAll(): Promise<AxiosResponse<Pokemon[]>> {
      return this.httpService.axiosRef.get('https://pokeapi.co/api/v2/pokemon/ditto');
  // async getPokemon():Promise<Pokemon[]> {
  //   let http = new HttpService()
  //   let pokemon = new PokemonService(http)
  //    return await pokemon.findAll();
  // }
    }
}
