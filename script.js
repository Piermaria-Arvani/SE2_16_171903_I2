//gestisce l'inserimento di item ( nuovi o non)
function inserisci(){
    var table = document.getElementById("Oggetti");
    var n = document.getElementById("Oggetti").rows[0].cells.length;
    var items =  table.rows[0];
    var valori = table.rows[1];
    var item = document.getElementById("item").value;
    var numero = parseInt(document.getElementById("numero_inserito").value);
    var trovato = false;
    var totale = 0;
    var indice;
    
    for ( i = 0; i < n; i++){
        if( items.cells[i].innerHTML == item){
            trovato = true;
            indice = i;
        } 
        totale+= parseInt(valori.cells[i].innerHTML);
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
    totale += parseInt(numero);
    controllaCapacita(totale);
    nascondi();
    resetFields();
}

//mostra un alert se la somma delle quantità degli item è maggiore rispetto alla capacità massima
function controllaCapacita(totale){
    var max = parseInt(document.getElementById("capacity").value);
    if (totale > max) alert("Il magazzino è pieno");
}

// calcola la somma tra le quantità degli item e chiama controllaCapacità
function controllaCambioCapacita(){
    var n = document.getElementById("Oggetti").rows[0].cells.length;
    var valori = document.getElementById("Oggetti").rows[1];
    var totale = 0;
    
    for ( i = 0; i < n; i++){
        totale+= parseInt(valori.cells[i].innerHTML);
    }
    controllaCapacita(totale);
}

//funzione che nasconde i due campi per l'inserimento di un nuovo elemento
function nascondi() {
     document.getElementById('aggiunta').style.display = "none";
}

//funzione che mostra i due campi per l'inserimento di un nuovo elemento
function visualizza(){
   document.getElementById('aggiunta').style.display = "block";
}

//funzione che nasconde i due campi per l'inserimento di un nuovo elemento
function resetFields(){
    document.getElementById('numero_inserito').value = '';
    document.getElementById('item').value= '';
}