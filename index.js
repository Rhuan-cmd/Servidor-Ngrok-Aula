const conteiner = document.getElementById("conteiner");

async function atualizarInterface() {
    try {
        const resposta = await fetch('https://skookum-paulina-unpreponderated.ngrok-free.dev/mensagens', {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        });
        const mensagens = await resposta.json();
        console.log(mensagens)
        
        for (let i = conteiner.childElementCount; i < mensagens.length; i++){
            const h1 = document.createElement('h1');
            h1.textContent = mensagens[i];

            conteiner.append(h1);
        }

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        conteiner.textContent = "Erro ao carregar mensagens";
    }
}

atualizarInterface();

setInterval(atualizarInterface, 2000);