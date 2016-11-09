
function inserisci(){
    console.log("inserisci");
    var table = document.getElementById("Oggetti");
    var n = document.getElementById("Oggetti").rows[0].cells.length;
    var items =  table.rows[0];
    var valori = table.rows[1];
    var item = document.getElementById("item").value;
    var numero = parseInt(document.getElementById("numero_inserito").value);
    var trovato = false;
    var indice;
    for ( i = 0; i < n; i++){
        console.log(item);
        if( items.cells[i].innerHTML == item){
            trovato = true;
            indice = i;
        }   
    }
    if (trovato){
        var temp = parseInt(valori.cells[indice].innerHTML) + numero;
        var x = document.getElementById("Oggetti").rows[1].cells;
        x[indice].innerHTML = ""+temp;
    }
    else{
        var new1 = items.insertCell(-1)
        new1.innerHTML = item;
        var new2 = valori.insertCell(-1)
        new2.innerHTML = "" + numero;
    }

    nascondi();
}


function nascondi() {
     document.getElementById('aggiunta').style.display = "none";
}



function visualizza(){
   document.getElementById('aggiunta').style.display = "block";
}

