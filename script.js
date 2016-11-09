var list = ["apple", "pear", "peach", "banana", "cherry", "melon", "lemon", "strawberry", "mango", "papaya"];

var tot = 0;
var i = 0;
var fruit = null;
var insertFruit = [];

while ( i < 5 ){
   fruit = prompt('Try to find a fruit'); 
   if(list.indexOf(fruit)>=0){
       if(insertFruit.indexOf(fruit)<0 ){
           tot+=10;
           alert ("indovinato!");
           insertFruit.push(fruit);
        }
        else
            alert("hai già provato questo frutto");
    }
    else
        alert("Questo frutto non è nella lista");
    i++;
 }


alert("il tuo punteggio :" + tot);