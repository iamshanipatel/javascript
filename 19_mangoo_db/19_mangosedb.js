const express = require('express')
const app = express()

const userModel = require('./mongoabc')
const newuserModel = require('./newfile')

app.get('/singup', (req, res) =>{
    let sing = newuserModel.create({
      name: "shani",
        
    })
})

console.log(userModel)
app.get('/', (req, res) => {
   res.send('hey______________')
})

app.get('/create', async (req, res) =>{
    let creteduser = await userModel.create({
        name: "shani",
        email: "shani@gmail.com",
        username: "patel"
    })
   res.send(creteduser);
})

app.listen(3000)
