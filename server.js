const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    
    const list = [
        {
            title: 'B',
            message: "rabo"
        },
        {
            title: 'I',
            message: "ncrivel"
        },
        {
            title: 'G',
            message: "entil"
        },
        {
            title: 'O',
            message: "bjetivo"
        },
        {
            title: 'D',
            message: "eterminado"
        },
        {
            title: 'E',
            message: "legante"
        },
    ]
    const subtitle = "Uma linguagem de modelagem para criação de página HTML ultilizando Js"

    res.render("pages/index", {
        qualitys: list,
        subtitle: subtitle,
    });


})

app.get("/about", function(req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando...");