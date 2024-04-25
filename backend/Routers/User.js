const express = require('express');
const router = express.Router();
const Model = require('../Models/User')

router.post('/add', (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
        .then((result) => {
            console.log(result);
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

//getall

router.get("/getall", (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});


router.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result)=>{
        if(result){
            res.json(result);
        }else{
            res.status(401).json({message:"Invalid Credentials"})
        }
    }).catch((err)=>{
        console.log(err);

        res.status(500).json(err);
    });
});

module.exports = router;