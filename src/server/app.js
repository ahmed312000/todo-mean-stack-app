const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const path = require('path')
// const port = process.env.PORT || 8080;
// const port = 3000
const port = process.env.PORT ||8080

const appRoutes = require('./routes/app')
const todoRoutes = require('./routes/todo')
const userRoutes = require('./routes/user')





// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// cors
app.use(cors());

//set views engine hbs
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');

// set static files
app.use(express.static(path.join(__dirname, 'public')));


// connecting to database
mongoose.connect("mongodb://ahmed2100:ahmedazhary312000@ds113853.mlab.com:13853/tododb");

// 'localhost:27017/todo' for local dev

app.use('/todo' , todoRoutes);
app.use('/user' , userRoutes);
app.use('/' , appRoutes)

// 404 error 
app.use(function (req, res, next) {
    return res.render('index');
});


app.listen(port).timeout = 1000000 ;
// console.log('listening on localhost:3000\r\n')




































// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path')
// const appRoutes = require('./routes/app')

// const port = 3000 ;


// const app = express();

// app.use(cors())

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


// app.set('views', path.join(__dirname, 'public'));
// app.set('view engine', 'hbs');


// mongoose.connect('localhost:27017/todo')



// app.use('/' , appRoutes)



// // 404
// app.use('/' , (req , res , next) => {
//     return res.render('index')
// })



// app.listen(port).timeout = 100000 ;