const express = require('express');
const Job = require('../models/Job');
const router  = express.Router();
const job     = require('../models/Job');


//rota de teste
router.get('/test',(req,res) => {
    res.send('deu certo');
});

//form da rota de view
router.get('/add', (req,res) => {
    res.render('add');
});

//detalhe da vaga
router.get('/view/:id', (req,res) => Job.findOne({
    where: {id: req.params.id}
}).then(job => {

    res.render('view', {
        job
    });
}).catch(err => console.log(err)));


router.post('/add', (req,res) => {

    let {title,salary,company,description, email, new_job} = req.body;


    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));


});


module.exports = router