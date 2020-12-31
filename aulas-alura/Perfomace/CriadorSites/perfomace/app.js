

const express = require("express");


const app = express();
//const handlebars = require('express-handlebars');

//app.engine('handlebars', handlebars({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.static('files'));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/site/index.html");

});

app.get("/pagamento",  function(req, res){
	
  

});

app.get("/sobre-empresa", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/leo", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/leandro", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/facebook", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/whatsapp", function(req, res){
	res.sendFile(__dirname + "/site/index.html");
});

app.get("/blog", function(req, res){

	res.send("Pagina do blog");

});

app.get("/contato", function(req, res){

	res.send("Pagina de contato");

});

app.listen(8081);


///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'celke'
// });

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('CriadorSites', 'leandro01832_SQLLogin_1', '7tewoxjz8k', {
//   host: 'CriadorSites.mssql.somee.com',
//   dialect: 'mssql',
//     dialectOptions: {
//         instanceName: 'MSSQLSERVER2014'
//     }
// });


// sequelize.authenticate().then(function(){
// console.log('Conexão realizada com sucesso');
// }).catch(function(err){

// console.log('Erro na conexão: ' + err);

// });

// async function buscar(){
//  Pagina = await Pagina.findAll();
// }

// buscar();

// if (Pagina !== null) {
 // console.log('Not found!');
//} else {
  //console.log('deu certo.');//Pagina instanceof Pagina); // true
  // Its primary key is 123
//}

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('select * from users', function(err, rows, fields){
//  	if(!err){
//  		console.log('Resultado: ', rows);
//  	}
//  	else{
//  		console.log('erro ao realizar a consulta');
//  	}

// });

// connection.query("insert into users(nome, email) values ('leo', 'leo@gmail.com')",
//  function(err, result){
//  	if(!err){
//  		console.log('usuario cadastrado.');
//  	}
//  	else{
//  		console.log('Erro ao cadastrar o usuario');
//  	}
// });

// connection.query("update users set nome='Malu' where id=1",
//  function(err, result){
//  	if(!err){
//  		console.log('usuario editado com sucesso.');
//  	}
//  	else{
//  		console.log('usuario não editado');
//  	}
// });

// connection.query("delete from users where id=1",
//  function(err, result){
//  	if(!err){
//  		console.log('usuario apagado com sucesso.');
//  	}
//  	else{
//  		console.log('usuario não editado');
//  	}
// });





