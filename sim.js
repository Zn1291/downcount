const contador = document.getElementById('contador');

//data do retorno da moi
const dataRetorno = new Date('2026-08-03T00:00:00').getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataRetorno - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.textContent = `${dias}D, ${horas}H, ${minutos}M e ${segundos}S`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Atualiza o contador imediatamente ao carregar a página
atualizarContador();