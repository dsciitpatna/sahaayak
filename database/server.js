const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://localhost:27017/sahayakdb',{useNewUrlParser:true});
//set mongoose's Promise equal to global Promise since mongoose's Promise version is depricated
mongoose.Promise = global.Promise;
//these 3 lines are included to remove Deprecation Warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.send('connected');
})

//error handling middleware
app.use(function(err,req,res,next){
   res.status(422).send({error:err.message});
});

app.listen(process.env.port||3001,function(){
    console.log('listening to port 3001');
});