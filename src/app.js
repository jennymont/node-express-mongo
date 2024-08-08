import express from  'express';
import { connectDataBase } from './config/dbConnect.js';
import routes from './routes/index.js';

const conection = await connectDataBase();


const app = express();
routes(app);

conection.on('error', (erro) => {
    console.error('error de conexão', erro);
})
    
conection.once('open', () => {
    console.log('conexão com o banco feita com sucesso')
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso');
})

export default app;