
const router = require('express').Router();

module.exports = (wagner) => {
    const productCtrl = wagner.invoke((Product) => 
        require('../controllers/product.controller')(Product));

    router.post('/', (req, res) =>
    productCtrl.createProduct(req, res));

    router.get('/', (req, res) =>
    productCtrl.findAll(req, res));
    
    router.get('/:id', (req, res) =>
    productCtrl.findByID(req, res));

    router.delete('/:id', (req, res) =>
    productCtrl.deleteByID(req, res));

    router.put('/:id', (req, res) =>
    productCtrl.updateByID(req, res));
        
    return router;
}