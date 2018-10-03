const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Todo = require('../models/todo');
const cors = require('cors');


router.get('/get-all/:id' , (req , res ,next) => {
    Todo.find({ userId : req.params.id } , (err , todos) => {
        if(err) {
            return res.status(500).json({
                title : 'error',
                error : err
            })
        }
        res.status(200).json({
            title : 'got todos',
            obj : todos
        })
    })
})


router.delete('/:id' , (req , res , next) => {
    Todo.findById(req.params.id , (err , todo) => {
        if(err) {
            return res.status(500).json({
                title : 'error',
                error : err
            })
        }
        else if(!todo) {
            return res.status(500).json({
                title : 'error',
                error : { message : 'todo not found' }
            })
        }
        
        todo.remove()

        res.status(200).json({
            title : 'removed',
            obj : todo 
        })
    })
})








router.post('/' , (req , res , next) => {
    let todo = new Todo({
        content : req.body.content ,
        userId : req.body.userId
    })
    todo.save((err , result) => {
        if(err) {
            return res.status(500).json({
                title : 'error',
                error : err
            })
        }
        User.findById(req.body.userId , (err , user)=> {
            if(err) {
                return res.status(500).json({
                    title : 'error',
                    error : err
                })
            }

            user.todos.push(result._id);
            user.save() ;
               
            res.status(201).json({
                title : 'todo created',
                obj : result ,
                test : user.todos 
            })

        })
        
       
    })
})

module.exports = router ;


