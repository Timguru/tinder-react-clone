import mongoose from 'mongoose' 

const url = "mongodb://localhost:27017/tinderclone"

mongoose.connect(url, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log('Database connected succesfully')
    }
})

mongoose.Promise = global.Promise

export default mongoose
