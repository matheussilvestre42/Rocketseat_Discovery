//001

function transformScores(score) {
    let newScore   
    if(score >= 90) {
        newScore = 'A'
    } else if(score < 90 && score >= 80){
        newScore = 'B'
    } else if(score < 80 && score >= 70){
        newScore = 'C'
    } else if(score < 70 && score >= 60){
        newScore = 'D'
    } else if(score  < 60 && score >= 0) {
        newScore = 'F'
    } else{
        newScore = 'Nota inválida'
    }

    return newScore
}

console.log(transformScores(9))

console.log('---------------------------------------------------------')

//002

const family = {
    incomes: [123.54, 500, 75, 50],
    expenses: [365, 57.40, 12, 45, 300]
}

const saldo = (incomes, expenses) =>{
    let sumIncomes = sum(incomes)
    let sumExpenses = sum(expenses)

    let balance = sumIncomes - sumExpenses

    console.log(`Sado: R$${balance.toFixed(2).replace('.', ',')} - ${balance > 0 ? 'POSITIVO' : 'NEGATIVO'}`)
   
}

const sum = (array) => {
    let total = 0
    for(let i of array){
        total += i
    }
    return total
}

saldo(family.incomes, family.expenses)

console.log('---------------------------------------------------------')

//003


function transformDegree(temperature) {
    const celsiusExsists = temperature.toUpperCase().includes('C')
    const fahrenheitExists = temperature.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExsists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let updateDegree = Number(temperature.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if(celsiusExsists){
        updateDegree = Number(temperature.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try{
    console.log(transformDegree('50f'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('12Z'))
} catch(error){
    console.log(error.message)
}


console.log('---------------------------------------------------------')

//004

const booksByCategory = [
    {
        category: "Riquezas",
        books: [
            {
                title: "Os Segredos da mente milionária",
                author: "T. Harv Eker",
            }, 
            {
                title: "O homem mais rico da Babilônia",
                author: "George S.Classon",
            }, 
            {
                title: "Pai rico, pai pobre",
                author: "Robert T.Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubtituível",
                author: "Augusto Cury",
            }, 
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategories = booksByCategory.length
for(let category of booksByCategory){
    console.log(`Categoria: ${category.category} - Total de Livros: ${category.books.length}`)
}
console.log(`Total de Categorias: ${totalCategories}`)



const totalAuthors = () => {
    let authors = []
    for(let i of booksByCategory) {
        for(let j of i.books){
            if(authors.indexOf(j.author) == -1){
                authors.push(j.author)
            }
        }
    }
    return authors.length
}
console.log(`Total de autores: ${totalAuthors()}`)



const augustoCuryBooks = () => {
    let augustoCuryBook = 0
    for(let i of booksByCategory){
        for(let j of i.books){
            if(j.author.toUpperCase().includes('AUGUSTO CURY')){
                augustoCuryBook += 1
            }
        }
    }

    return augustoCuryBook
}
console.log(augustoCuryBooks())


const searchBook = (authorName) => {
    let book = []
    for(let i of booksByCategory){
        for(let j of i.books){
            if(j.author.toUpperCase() == authorName.toUpperCase()){
                book.push(j.title)
            }
        }
    }

    return book
}
console.log(searchBook('Augusto Cury'))
console.log(searchBook("George S.Classon"))

