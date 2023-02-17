/*
    -var
    -let
    -const
*/

/*
    Scopo
    -Determina a visibilidade de alguma variavel no JS

    -var tem escopo global e local
    -const e let são locais e só funcionam no escopo onde foi criada
    
*/
//Hoisting (içamento)

console.log(x)
{   
    var x = 0
}
console.log(x)


let y = 1

{
    {
        {
            {
                y = 0 //quando não declarado ele vai procurar fora do escopo e trazer a declaração
                console.log(y)
            }
        }
    }
}

console.log(y)

