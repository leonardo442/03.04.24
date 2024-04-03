/**
 * o algoritimo ifelse serve para validação de dados, por exemplo:
 * if (variavel1 == varialvel2) { algo ira acontecer se a variavel1 for igual a variavel2 } else { algo ira acontecer se a variavel1 for diferente da variavel2 }
 * 
 * if: nome do algaritimo
 * parenteses (): local onde se declaram os parametros ou expressao a ser validada
 * chaves {}: bloco de codigos a serem executados, ou seja, tudo que estiver dentro do bloco de codigos sera executado
 * else: "senao" é onde serão executados os codigos, que extiverem dentro do bloco {}, caso a validação de algoritmo "if" retorne falsa
 * 
 * 
 * operadores logicos :
 * 
 * == serve para comparar se uma variavel/valor é igual a outra
 * != serve para comparar se uma variavel/valor é diferente da outra
 * > serve para comparar se uma variavel/valor é maior que a outra
 * < serve para comparar se uma variavel/valor é menor que a outra
 * >= serve para comparar se uma variavel/valor é maior ou igual a outra
 * <= serve para comparar se uma variavel/valor é  menor ou igual a outra 
 * 
 * se "falso": adicionar o ponto de exclamação no inicio de declaração de parametros/expressão, por exemplo:
 * if (!variavel1 == variavel2) {bloco de codigo} aqui significa que:se a comparação de variavel1 com a variavel2 retornar falso, os codigos que estiverem dentro do bloco de codigo serão executados, não havendo a necessidade do uso da clausula "else"
 * 
 * criar um validador onde você irá declarar duas variaaveis, cada um com um valor DIFERENTE da outra, então haverá uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada uma das duas variaveis, ou seja:
 * <input type="text" id="txtVar1"/>
 * <input type="text" id="txtVar2"/>
 * 
 * var textVar1 = document.getElementById("txtVar1"); 
 * var textVar2 = document.getElementById("txtVar2");
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * eviar os dados via console.log()
 */


function verificar() {
    var txtVar1 = document.
    getElementById("txtVar1");
    var textVar2= document.
    getElementById("txtVar2");
    
    if (txtVar1.value == textVar2.value)
    {
        console.log("os dados são iguais.");
    } else {
    console.log("os dados são diferentes.");
}
}
