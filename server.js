import express from 'express'
import db from './db/db.js'
import cards from './models/dbCards.js'
import cors from 'cors'


//app
const app = express()


//app config
const port = 8001 || process.env.PORT
app.use(express.json())
app.use(cors())
//database

//routes
app.get('/', (req, res)=>{
    res.status(200).send("hello world")
})

app.post('/tinder/cards', (req, res)=>{
    const dbCard = req.body

    cards.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send('Created')
        }
    })
})

app.get('/tinder/cards', (req, res)=>{
    cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

//listen
app.listen(port, (err)=>{
    if(err){
        throw err
    }else {
        console.log(`Server started on port ${port}`)
    }
})


