const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
const port=process.env.PORT ||3000;
var app=express();

app.set('view engine','hbs');
//app.use(express.static(__dirname +'/Html'));

//app.get('/',(req,res) =>{
   // res.send('!$ Hello World $!');
   ///res.send({
    // name: 'Andrew',
    // age:23,
    // likes:['Bike','car','Apple','mango']
   //})
//});

hbs.registerPartials(__dirname+'/views/partials');

app.use((req,res,next)=>{
  var now = new Date().toString();
  var log=now+req.method+req.url;
  fs.appendFile('server.log',log+'\n');
  console.log(log); 
 next();
});

//app.use((req,res,next)=>{
 //res.render('maintenance.hbs');
//});
                    
hbs.registerHelper('getcurrentYear',() =>{
   return new Date().getFullYear()
});

app.get('/',(req,res) =>{
    res.render('home.hbs',{
    pageTitle:'Home page',
   // currentYear:new Date().getFullYear()   
    });
});

app.get('/about',(req,res) =>{
  res.render('about.hbs',{
     pageTitle:'About Page',
    // currentYear:new Date().getFullYear() 

  });
});

//app.get('/error',(req,res) =>{
  //res.send({
  //  errorMessage:'Unable to handle error'
  //});
//});
app. listen(port,()=>{
  console.log('server is up 3000');
});