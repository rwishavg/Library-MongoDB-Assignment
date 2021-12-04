const express = require("express")
const app = express()
const mongoose = require("mongoose")
const schema = require('./schema')
const url = "mongodb+srv://rwishav:itsrick0312@cluster0.b3l6t.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post('/add-new-post', async (req,res)=>{
    const myBook = req.body.Book;
    const myName = req.body.Name;
    const myDate = req.body.Date;
    try{
        const newData = new schema(
            {
                Book: myBook,
                Name: myName,
                Date: myDate
            }
        )
        const saveData = await newData.save()
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("Server is Working")
})

app.listen(3000,()=>{
    console.log("Express is Working");
})
