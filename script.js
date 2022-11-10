let valorepercorrenza = prompt("Inserisci il numero di Km da percorrere");
let etapasseggero = prompt("Inserisci l'età del passeggero");

let tariffabase = 0.21;

let tariffacalcolata = valorepercorrenza * tariffabase;

let scontominorenni = (tariffacalcolata*20/100);
let scontoanziani = (tariffacalcolata*40/100);

console.log(
    `
    Informazioni___________________________________________________

        1)Km da percorrere:      ${valorepercorrenza} Km
        2)tariffa base:          ${tariffabase} €
        )Età passeggero:        ${etapasseggero} Anni
        
    

        Prezzo finale:          €

    ____________________________________________________Informazioni
    `
);



    console.log(

     `
    ${tariffacalcolata}
    
  

    `
     );










/*
document.getElementById("p-nome").innerHTML = nome;

document.getElementById("p-prezzo").innerHTML = nome + cognome + colore + (numero1 / numero2); */