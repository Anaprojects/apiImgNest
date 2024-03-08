import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService,PokemonService],
})
export class AppModule {}
