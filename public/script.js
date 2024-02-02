const btnSend = document.querySelector('#enviar');
const iptTextMsg = document.querySelector('#texto');
const chat = document.querySelector('#mensagens');

const socket = io();

btnSend.addEventListener('click', () => {
    if (iptTextMsg.value !== "") {
        socket.emit('Nova mensagem', iptTextMsg.value);
        iptTextMsg.value = "";
    }
})

socket.addEventListener('Nova mensagem', (msg) => {
    const msgElement = document.createElement('li');

    msgElement.textContent = msg;
    msgElement.classList.add('mensagem');

    chat.appendChild(msgElement)
})