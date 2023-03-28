const landscapes = document.querySelector(".landscapes");
const time = document.getElementById("hour");

const images = [
    'images/cachoeira-na-islandia.jpeg',
    'images/baloes.jpeg',
    'images/cachoeira.jpeg',
    'images/captolio.jpeg',
    'images/iracemapolis.jpeg',
    'images/lencois.jpeg',
    'images/litoral.jpeg',
    'images/penhasco.jpeg',
    'images/rio.jpeg',
    'images/viagem.jpeg',
    'images/viagem.jpeg'
];

setTimeout(slideShow(),2000);
setInterval(clock, 1000);



function slideShow(){

    for (let i = 0 ; i < images.length ; i++) {
        setTimeout(() =>{
            landscapes.src = images[i];
        } 
        ,i *5000);
        
     }
    }

    function clock(){
        const date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        const total = hours + ':' + minutes + ':' + seconds;
        time.innerHTML = total;
    }   

    

     


