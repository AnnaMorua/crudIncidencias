const express = require('express');
const router = express.Router();

const Incidencia = require('../models/Incidencia');

router.get('/', async (req, res) =>{
    const incidencia = await Incidencia.find();
    res.render('index', {
        incidencia
    });
});

router.post('/add', async(req, res) =>{
    const incidencia =new Incidencia(req.body);
    await incidencia.save();
    console.log(incidencia);
    res.send('recibido');
});

router.post('/add', async(req, res) =>{
    const proveedor =new Proveedor(req.body);
    await proveedor.save();
    console.log(incidencia);
    res.send('recibido');
});


router.get('/editar/:id', async (req, res) => {
    const { id } = req.params;
    const incidencia = await Incidencia.findById(id);
    res.render('editar', {
        incidencia
    });
});

router.post('/update/:id', async (req, res) =>{
    const { id } = req.params;
    await Incidencia.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/eliminar/:id', async (req, res) =>{
    const { id } = req.params;
    await Incidencia.remove({_id: id});
    res.redirect('/'); 
})


module.exports = router;