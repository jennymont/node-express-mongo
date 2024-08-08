import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    edit: {type: String},
    price: {type: Number},
    paginas: {type: Number},
}, {versionKey: false});

const livro = mongoose.model('livros', livroSchema);

export default livro;