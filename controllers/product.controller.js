const http = require('http');
const path = require('path');

let _product;

const createProduct = (req, res) => {
    const product = req.body;
        
    _product.create(product)
        .then((data)=> {
            res.status(200);
            res.json({msg:"Usuario creado correctamente", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}
//Consulta General
const findAll = (req,res) =>
{
    _product.find()
    .then((data) =>{
        if(data.length==0){
            res.status(204);
            res.json({msg:"No se encontraron usuarios"});
        }
        else {
            res.status(200);
            res.json({msg:"Exito",data:data});
        }
    }).catch((err) =>{
        res.json({msg:"Error"});
    });
}
//Consulta por ID
const findByID = (req,res) =>
{
   const{id}= req.params;
   const params={
    _id:id
};
    _product.findById(params)
    .then((data) =>{
        if(data.length==0){
            res.status(204);
            res.json({msg:"No se encontró producto"});
        }
        else {
            res.status(200);
            res.json({msg:"Exito",data:data});
        }
    }).catch((err) =>{
        res.json({msg:"Error"});
    });
}

const deleteByID =(req,res) => {
   const{id}= req.params;
   const params={
    _id:id
};
   _product.findByIdAndRemove(params)
   .then((data)=>{
    res.status(200);
    res.json({msg:"Exito usuario eliminado",data:data});
   })
   .catch((err)=>
   {
    res.status(204);
    res.json({msg:"Error No se encontraron usuarios"});
   });
}
const updateByID = (req,res) =>{
    const {id} = req.params;
    const product = req.body;

    const params = {
        _id:id
    } 
    _product.findByIdAndUpdate(params,product)
        .then((data)=>{
            res.status(200);
            res.json({msg:"Actualización de producto",data:data});
        })
        .catch((err)=>{
            res.status(204);
            res.json({msg:"Error no actualizado",err:err});
        })
}


module.exports = (Product) => {
    _product = Product;
    return({
        createProduct,
        findAll,
        deleteByID,
        updateByID,
        findByID
    });
}
