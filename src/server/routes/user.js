const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const cors = require('cors');



router.post('/' ,cors() , (req,res,next) => {
    let user = new User()
    
    user.save((err , result) => {
        if(err) {
           return  res.status(500).json({
               title : 'erooooorr',
               error : err
           })
        }
        let token = jwt.sign({} , 'secret' , {expiresIn : 3.154e+7})

        res.status(201).json({
            title : 'user Created',
            obj : result,
            token : token
        })

    })




})

module.exports = router ;