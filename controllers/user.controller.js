const http = require('http');
const path = require('path');

let _user;

const createUser = (req, res) => {
    const user = req.body;
        
    _user.create(user)
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
    _user.find()
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
    _user.findById(params)
    .then((data) =>{
        if(data.length==0){
            res.status(204);
            res.json({msg:"No se encontró usuario"});
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
   _user.findByIdAndRemove(params)
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
    const user = req.body;

    const params = {
        _id:id
    } 
    _user.findByIdAndUpdate(params,user)
        .then((data)=>{
            res.status(200);
            res.json({msg:"Actualización de usuario",data:data});
        })
        .catch((err)=>{
            res.status(204);
            res.json({msg:"Error no actualizado",err:err});
        })
}

//login

const login = (req,res) =>{
    const{email,password}= req.params;
const params = {
    email:email,
    password:password
};
_user.findOne(params,"-password")
    .then((data) => {
        if(data.length!=0){
        res.json({msg:"login correcto",data:data});
        }
    })
    .catch((err) => {
        res.json({msg:"ERROR",err:err});
    });
}


module.exports = (User) => {
    _user = User;
    return({
        createUser,
        findAll,
        deleteByID,
        updateByID,
        findByID,
        login
    });
}
