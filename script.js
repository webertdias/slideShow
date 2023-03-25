const paisagens = document.querySelector("paisagens");

const imagens = [
    'inverno.jpeg',
    'lago.jpeg',
    'praia1.jpeg'
];


const inicio = setTimeout( slideShow, 2000);

function slideShow (){

    paisagens.src = imagens[i];

    for(const i = 0; i < imagens.length; i++){
        imagens[i];        
    }
}

