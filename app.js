const http = require('http');
const express = require('express');

const app = express()

// app.use((req, res, next)=>{
//     console.log('Hii')
//     next()
// })

// app.use((req, res, next)=>{
//     console.log('How are you?')
// })

app.use('/user',(req, res, next)=>{
    res.send('How are you?')
    
})

app.use('/',(req, res, next)=>{
    res.send('Hii')
})


app.listen(5000)