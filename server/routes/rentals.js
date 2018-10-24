const express = require('express');
const router = express.Router();
const Rental = require('../model/rental');

router.get('', function(req,res) {
    Rental.find({}, (err, foundRentals)=>{
        res.json(foundRentals);
    });
});

router.get('/:rentalId', function(req,res) {
    const rentalId = req.params.rentalId;   
        Rental.findById(rentalId, (err, foundRental)=>{
            if(err) {
                res.status(404).send({error:[{title:'Rental Error', detail: 'Could not found Rental'}]});
            }
        res.json(foundRental);
    });
});

module.exports = router;
