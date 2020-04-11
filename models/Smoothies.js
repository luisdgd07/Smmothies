const{Schema,model}= require('mongoose');

const smoothieSchema = new Schema({
  name:{type:String},
  fruits:{type:String},
  liquid:{type:String},
  protein:{type:String},
  heart:{type:String},
  taste:{type:String},
  
/*  
  frutas:Watermelon:6 ; Strawberry:5; Pineapple:8 ;Orange :10 ; Kiwi: 7 ; Banana : 9; Limes: 4
  liquidos: leche : 4 ;agua: 0 ; agua de coco;: 2 :leche de soya: 3; leche de almendras: 1

  proteinas: vainilla,chocolata,coco, caramelo, sin sabor
  */
});

module.exports= model('Smoothie', smoothieSchema);
