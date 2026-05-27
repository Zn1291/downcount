const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseenter", () => {
    const larguraJanela = window.innerWidth -100;
    const alturaJanela = window.innerHeight -50;

    const novaPosicaoX = Math.floor(Math.random() * larguraJanela);
    const novaPosicaoY = Math.floor(Math.random() * alturaJanela);
    
    botaoNao.style.position = "absolute";
    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
});

const botaoSim = document.getElementById("sim");

botaoSim.addEventListener("click", () => {

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
    window.location.href = "sim.html";
    }, 2500);
});
