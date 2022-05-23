const express = require ('express');
const router = require('./confiq/routrs')
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(router);


require('./confiq/mongoos')

app.listen(3000,()=> {
    console.log('hi port')
})