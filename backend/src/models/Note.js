import mongoose from "mongoose";

//1 You need to create a schema 
//2 You need to create a model based off of that schema

const noteSchema = mongoose.Schema({
    title: {
        type:String,
        require: true
    },

    content: {
        type:String,
        require: true
        },
    }, 

{ timestamps: true } //mongoDB will automatically give createdAt, updatedAt 
);


const Note = mongoose.model("Note", noteSchema);

export default Note;