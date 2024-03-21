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
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';
import { AppService } from './app.service';
import { ItensDoBody } from './criando-Itens-dto';
import axios from 'axios';
import { ImagemEntity } from './imagens.entity';
import { imagemRepository } from './imagem.repository';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly pokemonService: PokemonService,
    private imagemRepository: imagemRepository) {}

  @Get('/pokemon')
  async getPokemon(): Promise<Pokemon[]> {
   const response = await this.pokemonService.findAll();
   return response.data
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello()
  }
  @Post('/criar')
   async pegarImg(@Body()createImg:ItensDoBody){
    const imgEntity = new ImagemEntity();
    imgEntity.imagem = createImg.imagem;
    this.imagemRepository.salvar(imgEntity)
    return "item Criado!^^"
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
