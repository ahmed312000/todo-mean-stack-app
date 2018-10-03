const mongoose = require('mongoose');
const User = require('./user')

const schema = mongoose.Schema({
    content : { type : String , required : true },
    userId : { type : String , ref: 'User' }
})

schema.post('remove' , (todo)=> {
    User.findById(todo.userId , (err , user) => {
        if(err) {
                return res.status(500).json({
                    title : 'error',
                    error : err
                })
        }
        user.todos.pull(todo._id);
        user.save();
    })
})



module.exports = mongoose.model('Todo' , schema);