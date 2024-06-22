import express from 'express';
import routes from './routes.js';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API está funcionando');
});

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
