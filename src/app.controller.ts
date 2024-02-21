import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/testeDeRota')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async pegarImagens(@Body() dadosDaImagem: any) {
    // console.log(dadosDaImagem)
    // foreach()
    dadosDaImagem.images.forEach(element => {
      console.log(element)
    });
    // const response = await this.httpService.axiosRef({
    //   url: 'https://example.com/image.png',
    //   method: 'GET',
    //   responseType: 'stream',
    // });
    return dadosDaImagem
  }
}
