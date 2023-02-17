//classe pai
class Veiculo {
    rodas = 4

    mover(direcao){}
    virar(direcao){}
}

//classe filho
class Moto extends Veiculo{
    constructor(){
        super() //puxar atributos e métodos do pai
        this.rodas = 2
    }
}