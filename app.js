const express = require('express')
const bodyParser = require('body-parser')
//frontend hits to backend
const cors = require('cors')


const connectDB = require('./config/db')

const app = express()

//Connect to DB
connectDB();

//MiddleWare Init
app.use(express.json({extended: false}));

const port = process.env.PORT||3000;

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

  app.use(cors())
app.get('/' , (req,res) => {
    res.send('WELCOME TO CII FORUM HOME !')
})

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

//server 
app.listen(port, () => 
    console.log(`[Info] Server started successfully! Listening at ${port}`)
)