const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/pagamento', function(req, res){
    res.render('pagamentos');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res){
    res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})

app.listen(3000);