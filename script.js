const paisagens = document.querySelector(".paisagens");

const imagens = [
    'imagens/cachoeira-na-islandia.jpeg',
    'imagens/campo.jpeg',
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


function slideShow(){

    for (let i = 0 ; i < imagens.length ; i++) {
        setTimeout(() =>{
            paisagens.src = imagens[i];
        } 
        ,i *5000);
        
     }
    }

    
    

     


