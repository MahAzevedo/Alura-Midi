/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
*/

//document.querySelector('.tecla_pom').onclick = tocaSomPom;


/*
automatizar as nossa funcionalidades, e principalmente trabalhar com muitos
elementos de uma vez só com LISTA DE ELEMENTOS de uma vez só
*/



//const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocaSomPom;

//const listaDeTeclas = document.querySelectorAll('input[type=button]');

//console.log(listaDeTeclas);

/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
*/

//enquanto
/*
while (contador < 9) {
    listaDeTeclas[0].onClick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}
*/

//atualizando:
/*
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onClick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}
*/
//-------

//atualizando a function e o while:

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// atualizando e criando uma função vazia
/*
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onClick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}
*/

/*
Atualizando 

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onClick = function () {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}
*/

/*
Atualizando 

while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1];

    console.log(instrumento);

    listaDeTeclas[contador].onClick = function () {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}
*/

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    tecla.onClick = function () {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}


