const router = require('express').Router();

module.exports = (wagner)=>{

 const brandCtrl = wagner.invoke((Brand) => 
    require('../controllers/brand.controller')(Brand));

    router.post('/', (req, res) =>
    brandCtrl.createBrand(req, res));

    router.get('/', (req, res) =>
    brandCtrl.findAll(req, res));

    router.get('/:id', (req, res) =>
    brandCtrl.findByID(req, res));

    router.delete('/:id', (req, res) =>
    brandCtrl.deleteById(req, res));

    router.put('/:id', (req, res) =>
    brandCtrl.UpdateByID(req, res));

    return router;
}