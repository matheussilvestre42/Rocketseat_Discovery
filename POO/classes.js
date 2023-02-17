//Estrutural

let alt = 50
let larg = 60

function calculaArea() {
    return alt * larg
}

let aria = calculaArea()


//Orientando a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() { //# visivel somente dentro da classe 
        return this.altura * this.largura
    }
}

//criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area)
