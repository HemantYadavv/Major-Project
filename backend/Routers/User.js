const express = require('express');
const router = express.Router();
const Model = require('../Models/User')

router.post('/add', (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
<<<<<<< HEAD
    .then((result) => {
       res.json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
});
router.get('/getall',(req,res) => {
    // empty brackets will give all the data from the database
    Model.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
    
});
=======
        .then((result) => {
            console.log(result);
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})
>>>>>>> dfc9ef2c40b9855d6f01e98943385726f8b5b56e

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