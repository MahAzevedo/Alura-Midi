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

/*
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
*/

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

/* 
Atualizando : substituindo a listaDeTeclas por uma ->   const tecla =

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
*/

/*
Atualizando com TEMPLATE STRING é a `crase`

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onClick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}
*/
//--------------------------------------------------------------

/*
-->>> Código completo e funcional abaixo:

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onClick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}
*/

/*
-->> while = depende de uma condição ser verdadeira ou falsa para determinar se
aquela repetição/rotina que está dentro das chaves do while será aplicada.
  O while depende de um fator externo para que possa funcionar, que é 
  no caso o contador.
   Tivemos que criar uma referência variável chamada contador que é verificada 
   a cada repetição do while e tem seu valor modificado também a cada valor, a
   cada repetição da rotina do while.
   
   Porém, imagina se tivessemos outros instrumentos que tivessem botões?
   Teíamos que declarar outros botões, outros contadores, e aí voltaríamos a 
   ter repetições em nosso código, teríamos que criar, por exemplo, 
   um -->>> let contador2 e outro, let contador3 ou let contadorDoBongo e 
   assim por diante, enfim, essa variável contador iria ficar repetitiva.

   O JS, oferece outra solução para esse problema de forma mais otimizada, ou 
   seja, já contido nele toda a estrutura, tanto do contador como da parte da 
   condição para nossa rotina de repetição encerrar, e também, da parte da 
   incrementação desse valor contador, e essa estrutura que vamos utilizar no 
   lugar do while se chama -->>> for

-->>> e for, significa para
    é uma estrutura de laço de repetição/loop, e também vai fazer a mesma coisa:
    -> enquanto uma instrução for verdadeira ele vai repetir essa rotina, porém,
      a vantagem em relação ao while, é que o contador pode ser declarado ainda
      dentro dos parênteses do for.
        -> Então aqui dá pra substituir o while, pelo for, e dentro dos
           parênteses, fazer a declaração do meu contador:
           for (let contador = 0; contador < listaDeTeclas.length) {} e,
           depois do ponto e vírgula têm a condição contador < listaDeTeclas.length,
           essa é a condição.

.antes com while -> while (contador < listaDeTeclas.length) {}
.depois com for -> for (let contador = 0; contador < listaDeTeclas.length; contador ++) {}

       --->>>>>> A diferença, basicamente, é que o let contador = 0; agora 
        está DENTRO do parâmetro. <<<<<<----

        1 de 3 vantagens de ter a declaração for:
        1 - é ter a declaração do contador DENTRO, junto com o;
        2 - segundo parâmetro do for que é a condição pro laço encerrar e a;
        3 - que é essa incrementação, que é: contador = contador + 1 (contador 
            recebe contador mais um), pode ser declarada nesse terceiro 
            parâmetro do for com uma sintaxe muito enxuta e muito bonita que é:
            contador ++ 
*/ 
//-----
/*Código completo, com melhoria usando ->  for

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;    não precisa mais disso aqui, pq agora está DENTRO do parâmetro

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onClick = function () {
        tocaSom(idAudio);
    }

    console.log(contador);

}

*/

/*
// Atualizado o código otimizado com for e pronto para uso:

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
*/
//----------

/*
// atualizando ocódigo ainda mais: 

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        //console.log(evento.code === 'Space' || evento.code === 'Enter');

        if (evento.code === 'Space' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');
        }

        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
*/

//------------

// atualizando ocódigo ainda mais: 

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        //console.log(evento.code === 'Space' || evento.code === 'Enter');

        if (evento.code === 'Space' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');
        }

        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

// and & e


