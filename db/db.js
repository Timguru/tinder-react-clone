import mongoose from 'mongoose' 

const url = "mongodb+srv://timothy:clone@cluster0.xuv8d.mongodb.net/tinderdata?retryWrites=true&w=majority"

mongoose.connect(url, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log('Database connected succesfully')
    }
})

mongoose.Promise = global.Promise

export default mongoose
