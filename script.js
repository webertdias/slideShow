const paisagens = document.querySelector(".paisagens");
const horario = document.getElementById("hora");

const imagens = [
    'imagens/cachoeira-na-islandia.jpeg',
    'imagens/baloes.jpeg',
    'imagens/cachoeira.jpeg',
    'imagens/captolio.jpeg',
    'imagens/iracemapolis.jpeg',
    'imagens/lencois.jpeg',
    'imagens/litoral.jpeg',
    'imagens/penhasco.jpeg',
    'imagens/rio.jpeg',
    'imagens/viagem.jpeg',
    'imagens/viagem.jpeg'
];

setTimeout(slideShow(),2000);
setInterval(relogio, 1000);



function slideShow(){

    for (let i = 0 ; i < imagens.length ; i++) {
        setTimeout(() =>{
            paisagens.src = imagens[i];
        } 
        ,i *5000);
        
     }
    }

    function relogio(){
        const data = new Date();
        hora = data.getHours();
        minutos = data.getMinutes();
        segundos = data.getSeconds();

        const tempo = hora + ':' + minutos + ':' + segundos;
        horario.innerHTML = tempo;
    }   

    

     


