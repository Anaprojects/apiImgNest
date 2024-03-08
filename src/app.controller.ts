// import { Body, Controller, Get, Injectable, Post, } from '@nestjs/common';
// import { AppService } from './app.service';
// import { MeuValor } from './variavel';

// @Controller('/testeDeRota')

// export class AppController {
//   constructor(private readonly appService: AppService) { }


//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
//   @Post()
//   async pegarImagens(@Body() dadosDaImagem: any) {
//     console.log(dadosDaImagem)
//     // foreach()
//     // dadosDaImagem.images.forEach(element => {
//     //   console.log(element)
//     // });
//     // const response = await this.httpService.axiosRef({
//     //   url: 'https://example.com/image.png',
//     //   method: 'GET',
//     //   responseType: 'stream',
//     // });

//     // return dadosDaImagem

// }
// }

import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { AppService } from './app.service'
import { Pokemon } from './pokemon';
import axios from 'axios';


@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/pokemon')
  async getPokemon(): Promise<Pokemon[]> {
    return await this.appService.getPokemon();
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  // @Post()
  // async pegarImagens(@Body() dadosDaImagem: any) {
  //   console.log(dadosDaImagem);
  //   // foreach()
  //   // dadosDaImagem.images.forEach(element => {
  //   //   console.log(element)
  //   // });
  //   // const response = await this.httpService.axiosRef({
  //   //   url: 'https://example.com/image.png',
  //   //   method: 'GET',
  //   //   responseType: 'stream',
  //   // });

  //   // return dadosDaImagem
  // }
}
