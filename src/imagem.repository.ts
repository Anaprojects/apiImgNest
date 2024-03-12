import { Injectable } from "@nestjs/common";
import { ImagemEntity } from "./imagens.entity";
@Injectable()

export class imagemRepository{
    private imagens:ImagemEntity[]=[]

    async salvar(imagem:ImagemEntity){
        this.imagens.push(imagem)
    }
    async retorno(){
        return this.imagens
    }
}