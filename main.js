function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;


/*
automatizar as nossa funcionalidades, e principalmente trabalhar com muitos
elementos de uma vez só com LISTA DE ELEMENTOS de uma vez só
*/



//const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('input[type=button]');

console.log(listaDeTeclas);