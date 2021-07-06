/* var nome = "";
var sobrenome = "";
var nome = prompt("Escreva seu primeiro nome: " + nome);
var sobrenome = prompt("Escreva seu sobrenome" + sobrenome);
alert("Hello, " + nome + " " + sobrenome); */

/* var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de idade!");
} else {
    alert("Menor de idade!");
} */

/* var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista);
//console.log(lista[2]);
//console.log(lista.length);
lista.push("Uva");
//console.log(lista.join(" - "));
console.log(lista);
console.log(lista.reverse()); */

/* var frutas = [{nome:"Maçã", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"}];
console.log(frutas); */

/* var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista);
lista.pop();
console.log(lista); */

/* var count = 1;
while (count <= 5) {
    console.log("Escreva: " + count);
    count = count + 1;
} */

/* var count;
for (count = 0; count <= 6; count++)
console.log(count); */

/* var texto = "Hello, World!";
console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase()); */

 /* function redirecionar() {
     window.open("https://www.google.com.br/");
 } */

/* function trocar () {
     alert("Passou o mouse!");
 } */

/* now = new Date;
 dayName = new Array ("domingo","segunda","terça","quarta","quinta","sexta","sábado");
 monName = new Array ("janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro");
 document.write("Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear());

 function time() {
     today = new Date();
     h = today.getHours();
     m = today.getMinutes();
     s = today.getSeconds();
     document.getElementById('texto').innerHTML = h + ":" + m + ":" + s;
     setTimeout('time()',500);
 } */

 //alert("Bem vindo ao nosso site!")

 function WorkedTime(entry_time, leaving_time){

    var entry_time = document.getElementById('entry_time').value;
    var leaving_time = document.getElementById('leaving_time').value;
    var break_time = document.getElementById('break_time').value;

    if(leaving_time>entry_time){
   
        entry_time = entry_time.split(':');
        entry_time = parseInt(entry_time[0]*60) + parseInt(entry_time[1]);
        
        leaving_time = leaving_time.split(':');
        leaving_time = parseInt(leaving_time[0]*60) + parseInt(leaving_time[1])

        break_time = break_time.split(':');
        break_time = parseInt(break_time[0]*60) + parseInt(break_time[1])
    
        entry_time = entry_time + break_time;
        var formated_hours = Math.floor((leaving_time - entry_time)/60);
        var formated_minutes = (leaving_time - entry_time)%60;
    
        if(formated_hours<10){
            formated_hours="0"+formated_hours;
        }
    
        if(formated_minutes<10){
            formated_minutes="0"+formated_minutes;
        }

        formated_hours = formated_hours || '00';
        formated_minutes = formated_minutes || '00';

        document.getElementById('result').innerHTML = formated_hours + ':' + formated_minutes;

    } else {
        console.log("invalid time");
        document.getElementById('result').innerHTML = "00:00";
    }    

}

var ganhoMes = document.querySelector("#ganho-mes");
var inputHoras = document.querySelector("#horas-dia");
var resultado = document.querySelector("#resposta");
console.log(resultado);

function calcularValorHora() {
  var salario = ganhoMes.valueAsNumber;
  var horas = inputHoras.valueAsNumber;

  var horasMes = horas * 22;
  var valorHora = salario / horasMes;
  var valorDuasCasas = valorHora.toFixed(2);

  console.log(valorDuasCasas);

  resultado.textContent = "R$ " + valorDuasCasas;
}