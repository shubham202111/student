const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const path = require('path');


//Cors Fix
const cors = require('cors');
const app = express(); 

//views
app.set('views',path.join('./views'));
app.set('view engine','pug');

//mongoDb configruation
const db = require('./src/config/mongoose').mongoURL

//attempt to connect Database
mongoose.connect(db,{ useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology:true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err))
            
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const userRoutes = require('./src/routes/user');


app.use(userRoutes);

//For Testing
app.get('/test',(req,res)=>{
    res.send("app is working")
})
app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/handleForm',(req,res)=>{
    res.send("saved");
})

 


app.listen(port, () => {
    console.log(`server is up at port ${port}`);
})