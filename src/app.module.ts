import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonService } from './pokemon.service';
import { imagemRepository } from './imagem.repository';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService,PokemonService,imagemRepository],
})
export class AppModule {}
