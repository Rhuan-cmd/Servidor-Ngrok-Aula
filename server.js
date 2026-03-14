const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Importa o limitador

const app = express();

app.set('trust proxy', 1);

app.use(cors());
app.use(express.json());

const enviadorLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // Janela de 1 minuto
    max: 10, // Limite: cada IP só pode enviar 10 mensagens por janela
    message: "Muitas mensagens vindas deste IP, tente novamente em 1 minuto.",
    standardHeaders: true, // Retorna info de limite nos headers Ratelimit-*
    legacyHeaders: false, // Desativa os headers X-RateLimit-* antigos
});

let mensagens = [];

app.get('/', (req, res) => {
    res.send("Servidor online");
});

app.post('/enviar', enviadorLimiter,(req, res) => {
    const { msg } = req.body;

    if (!msg){
        res.status(400).send("Campo msg não existe");
        return;
    }

    mensagens.push(msg);

    res.status(200).send("Mensagem enviada com sucesso!");
});

app.get('/mensagens', (req, res) => {
    res.status(200).json(mensagens);
});

app.listen(3000, () => {
    console.log("Servidor online em http://localhost:3000")
});