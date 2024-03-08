import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Pokemon } from './pokemon';
import axios from 'axios';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Pokemon[]> {
    const { data } = await firstValueFrom(
        //pipe é oq vai acontecer depois do meu get
      this.httpService.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/ditto').pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}