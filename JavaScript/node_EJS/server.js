const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (reg, res) => {
    const items = [
        {
            title: 'D',
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: 'E',
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: 'M',
            message: "uito fácil de usar"
        },
        {
            title: 'A',
            message: "morzinho"
        },
        {
            title: 'I',
            message: "nstall ejs"
        },
        {
            title: 'S',
            message: "intaxe simples"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    })
})

app.get("/sobre", (reg, res) => {
    res.render("pages/about")
})

app.listen(8080)
console.log("Servidor-Rodando")

