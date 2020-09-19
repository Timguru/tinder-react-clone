import mongoose from 'mongoose'

const db = mongoose.connection

db.once("open", ()=>{
    console.log("db connected")
})

const msgCollection = db.collection("messagecontents")

const changestream = msgCollection.watch()

changestream.on("change", (change)=>{
    console.log("Change detected", change)

    if(change.operationType === 'insert'){
        const messageDetails = change.fullDocument
        
    }
})