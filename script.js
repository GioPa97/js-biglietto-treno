let valorepercorrenza = prompt("Inserisci il numero di Km da percorrere");

let etapasseggero = prompt("Inserisci l'età del passeggero");

let tariffabase = 0.21;

let tariffacalcolata = valorepercorrenza * tariffabase;

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

let prezzoArrotondato = tariffacalcolata.toFixed(2);

if (etapasseggero > 65) {
    let scontoanziani = (tariffacalcolata * 40 / 100);

    console.log(

        `
        sconto-over65: -40%;
        Prezzo finale:  ${prezzoArrotondato - scontoanziani} €
            `
    );
} else if (etapasseggero < 18) {
    let scontominorenni = (tariffacalcolata * 20 / 100);

    console.log(

        `
        sconto-under18: - 20%;
        Prezzo finale:  ${prezzoArrotondato - scontominorenni} €
            `
    );
} else {

    console.log(
        `
        Prezzo finale:  ${prezzoArrotondato} €
    `

    )
};
