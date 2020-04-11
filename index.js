const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const path=require('path');
const app=express();
const mongoose = require('mongoose');
const uri='mongodb://localhost:27017/smoothie';
const option={useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true };
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

mongoose.connect(uri,option).then(
    ()=>{
        console.log("Conectado a mongodb"); 
    },  
    err=>{
        err
    }
)
app.use('/',require('./routes/Smoothies'));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));
app.get('/',function(req,res){
    res.render('index');
});
app.set('puerto',process.env.PORT|| 3000);
app.listen(app.get('puerto'),function(){
    console.log("puerto",app.get('puerto'));
});
