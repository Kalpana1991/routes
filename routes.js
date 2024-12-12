const ex = require('express');
const app = ex();
const path = require('path')
const pagepath = path.join(__dirname, "html");
console.log(pagepath)

// app.get('/',(req,res)=>{
//      res.send('hello world')

// })
app.get('/home', (req, res) => {
    res.sendFile(`${pagepath}/home.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${pagepath}/about.html`)
})


app.get('/contact', (req, res) => {
    res.sendFile(`${pagepath}/contact.html`)
})





app.listen(8000)