##Esercizio
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile senza resto per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**

1.  Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2.  Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
    **BONUS 1:**
    Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
    **BONUS 2:**
    Applica stili differenti agli elementi aggiunti al DOM nel _BONUS 1_, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
    Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

##Soluzione

**Logica**

1. creo un ciclo for per stampare i numeri da 1 a 100
2. creo un if dentro al ciclo per vedere:

SE un numero diviso 3 mi da resto 0 (num % 3 === 0) se sì è un multiplo di 3,
creo una variabile let result = "Fizz";

<div classe="(result)">`${result}`</div>

ALTRIMENTI SE (num % 5 === 0) è un multiplo di 5,
creo una variabile let result = "Buzz";

<div classe="(result)">`${result}`</div>

ALTRIMENTI SE ((num % 3 === 0) && (num % 5 === 0)) è un multiplo sia di 3 che di 5
creo una variabile let result = "BuzzFizz";

<div classe="(result)">`${result}`</div>

ALTRIMENTI non è un multiplo di 3 o 5
messagge = <div>`${i}`</div>;

**CSS e HTML**

1. creo una griglia di 100 numeri

2.creo uno stile con vari colori in base ai risultati
