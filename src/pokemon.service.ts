import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Pokemon } from './pokemon';
import axios from 'axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}
  findAll(): Promise<AxiosResponse<Pokemon[]>> {
    return this.httpService.axiosRef.get('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png');
  }
}