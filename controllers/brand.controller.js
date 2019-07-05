const http = require('http');
const path = require('path');
const status = require ('http-status');

let _brand;
const createBrand = (req, res) => {
    const brand = req.body;

    _brand.create(brand)
        .then((data)=> {
            res.status(200);
            res.json({msg:"Mraca creada correctamente", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}
const findAll = (req,res) =>
{
    _brand.find()
    .then((data) =>{
        if(data.length==0){
            res.status(204);
            res.json({msg:"No se encontraron Marcas"});
        }
        else {
            res.status(200);
            res.json({msg:"Exito",data:data});
        }
    }).catch((err) =>{
        res.json({msg:"Error"});
    });
}
const findByID = (req,res) =>{
        const{id}= req.params;
        const params={
         _id:id
     };
    _brand.findById(params)
    .then((data) =>{
        if(data.length==0){
            res.status(204);
            res.json({msg:"No se encontró la Marca"});
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
   _brand.findByIdAndRemove(params)
   .then((data)=>{
    res.status(200);
    res.json({msg:"Marca eliminada",data:data});
   })
   .catch((err)=>
   {
    res.status(204);
    res.json({msg:"Error No se encontraron marcas"});
   });
}

const updateByID = (req,res) =>{
    const {id} = req.params;
    const brand = req.body;

    const params = {
        _id:id
    } 
    _brand.findByIdAndUpdate(params,brand)
        .then((data)=>{
            res.status(200);
            res.json({msg:"Actualización de marca",data:data});
        })
        .catch((err)=>{
            res.status(204);
            res.json({msg:"Error no actualizado",err:err});
        })
}

module.exports = (Brand) => {
    _brand = Brand;
    return({
        createBrand,
        findAll,
        deleteByID,
        updateByID,
        findByID
    });
}
