const imagem = document.getElementById('container-corousel');

const images = [
    'url(https://imgnike-a.akamaihd.net/768x768/02261982.jpg)',
    'url(https://imgnike-a.akamaihd.net/768x768/027918ID.jpg)',
    'url(https://imgnike-a.akamaihd.net/768x768/01495051.jpg)',
    'url(https://imgnike-a.akamaihd.net/768x768/02265451.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/011580ID.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/02765115.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/02780351.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/028495P1.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/027645P1.jpg)',
    'url(https://imgnike-a.akamaihd.net/360x360/02927215.jpg)'
];

let index = 0;

function mudaImagemProximo() {
    index = (index + 1);

    if (index >= images.length) {
        index = 0;
    }

    // console.log(index);
    imagem.style.backgroundImage = images[index];
    imagem.style.backgroundSize = 'cover';
}

function mudaImagemAnterior() {
    if (index == 0) {
        index = images.length - 1;
    } else {
        index = (index - 1);
    }

    // console.log(index);
    imagem.style.backgroundImage = images[index];
    imagem.style.backgroundSize = 'cover';
}

function adicionarImagens (){
    const imagens = document.getElementsByClassName('div-imagem');

    for (let i = 0; i < images.length; i++) {    
        imagens[i].style.backgroundImage = images[i];
        imagens[i].style.backgroundSize  = 'cover';
    }
}

function anteriorSlide() {
    mudaImagemAnterior();
}



function proximoSlide() {
    mudaImagemProximo();
}

function detalhamento(index) {
    const containerImages = document.getElementsByClassName('div-imagem');

    window.location.href = `detalhamento.html?index=${index}`;
    // window.location.href = "detalhamento.html";
}


// botaoDireito.addEventListener('click', mudaImagem);

imagem.style.backgroundImage = images[0];
imagem.style.backgroundSize = 'cover';

adicionarImagens();