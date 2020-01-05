const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const path=require('path');
const app=express();
app.use(morgan('tiny'));

app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
//rutas
app.get('/',function(req,res){
    res.send('Hola mundo2');
});

//widdlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));//path.join(__dirname, cambia por la dir hosting 

app.set('puerto',process.env.PORT|| 3000);
app.listen(app.get('puerto'),function(){
    console.log("puerto",app.get('puerto'));
});
//nodemon es para ver cambios sin actualizar
//morgan dice las peticiones a url
//cors para realiza peticiones de servidores externos
