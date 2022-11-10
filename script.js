let valorepercorrenza = prompt("Inserisci il numero di Km da percorrere");
let etapasseggero = prompt("Inserisci l'età del passeggero");

let tariffabase = 0.21;

let tariffacalcolata = valorepercorrenza * tariffabase;

let scontominorenni = (tariffacalcolata * 20 / 100);
let scontoanziani = (tariffacalcolata * 40 / 100);

console.log(
    `
    Informazioni___________________________________________________

        1)Km da percorrere:      ${valorepercorrenza} Km
        2)tariffa base:          ${tariffabase} €
        3)Prezzo esente sconti:  ${tariffacalcolata} €
        4)Età passeggero:        ${etapasseggero} Anni
    ____________________________________________________Informazioni
    `
);



if (etapasseggero > 65) {
    console.log(

        `
        sconto-over65: -40%;
        Prezzo finale:  ${tariffacalcolata - scontoanziani} €
            `
    );
} else if (etapasseggero < 18) {
    console.log(

        `
        sconto-under18: - 20%;
        Prezzo finale:  ${tariffacalcolata - scontominorenni} €
            `
    );
} else {
    console.log(
        `
        Prezzo finale:  ${tariffacalcolata} €
    `

    )
};









/*
document.getElementById("p-nome").innerHTML = nome;

document.getElementById("p-prezzo").innerHTML = nome + cognome + colore + (numero1 / numero2); */