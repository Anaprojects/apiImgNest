import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Pokemon } from './pokemon';
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
      return this.httpService.axiosRef.get('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png');
    }
}
