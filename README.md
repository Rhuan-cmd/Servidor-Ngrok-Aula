## Como executar o projeto

1. Tenha o **Node.js** instalado na sua máquina.

2. Rode o comando:

```bash
npm install
```

3. Execute o arquivo `server.js` usando:

```bash
node server.js
```

4. Abra o arquivo `index.html` no seu navegador.

5. Faça as requisições para `http://localhost:3000` (ou para o seu link do **ngrok**).
   Utilize a rota `/enviar` e envie um corpo em **JSON** no seguinte formato:

```json
{
  "msg": "sua mensagem"
}
```
