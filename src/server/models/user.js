const mongoose = require('mongoose');

const schema = mongoose.Schema({
    todos : [{type : String , ref : 'Todo'}]
})

module.exports = mongoose.model('User' , schema);