export class Produto {
    _id:string;
    nome:string;
    preco:number;
    quantidade:number;

    constructor(){
        this._id = '';
        this.nome = '';
        this.preco = 0.0;
        this.quantidade = 0;
    }
}