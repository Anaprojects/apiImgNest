import { Body, Controller, Get, Injectable, Post, } from '@nestjs/common';
import { AppService } from './app.service';
import { MeuValor } from './variavel';

@Controller('/testeDeRota')

export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async pegarVariavel(): Promise<string> {
    try {
      console.log("Esta guardado", MeuValor)
      return MeuValor
    } catch (error) {
    console.error('Erro ao pegar o valor da variável:', error);
    throw error;
  }
}

}
// async pegarImagens(@Body() dadosDaImagem: any) {
    // console.log(dadosDaImagem)
    // foreach()
    // dadosDaImagem.images.forEach(element => {
    //   console.log(element)
    // });
    // const response = await this.httpService.axiosRef({
    //   url: 'https://example.com/image.png',
    //   method: 'GET',
    //   responseType: 'stream',
    // });

    // return dadosDaImagem