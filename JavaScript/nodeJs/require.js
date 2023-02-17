//maneira de chamar modulos nativos ou criados do node
//path - modulo que já existe no node

const path = require('path')

console.log(path.basename(__filename))

//basename - nome base do arquivo

//meus modulos

const myModule = require("./exports")

console.log(myModule)