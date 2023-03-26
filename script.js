const paisagens = document.querySelector(".paisagens");

const imagens = [
    'imagens/lago.jpeg',
    'imagens/inverno.jpeg',
    'imagens/praia1.jpeg',
    'imagens/outono.jpeg'
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
    




//var time = 2000;
//var count = 0;

//function moveSlideShow(){
//    paisagens.src = imagens[count];

 //   if(count < imagens.length - 1){
//          count++;
//    }else{
 //       count = 0;
//    }
//    setTimeout("moveSlideShow()", time);
//}

//window.onload = moveSlideShow;

//function slideShow() {

//