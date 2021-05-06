// const { Module } = require('module');
const HelloFunc = require('./helloWorld');

// HelloFunc.Hello();

// console.log(HelloFunc.name)

//setInterval

setInterval(()=>{
    HelloFunc.Hello();
},1000);

//setTimeout -- callback function gets called onky once at defined time
setTimeout(()=>{
    console.log(HelloFunc.name);
},5000);

//Local Module
//Global module
//3rd Party Module/Package
