/**Specifiche:

L'applicazione gestisce una collezione di post-it. Un post-it consiste in
un titolo ed un contenuto. Sull'interfaccia vengono visualizzati tutti i
titoli dei postit. L'utente può selezionare un titolo per visualizzarne il
contenuto. L'utente può creare un nuovo post-it o cancellarne uno
esistente. La collezione di post-it di un utente è memorizzata in
corrispondenza ad una URL rilasciata da https://keyvalue.xyz. All'inizio il
servizio carica il contenuto della collezione di post-it, rappresentati in
JSON, e la memorizza il un oggetto interno. Ad ogni operazione di
cancellazione/creazione la collezione di post-it viene caricata su
keyvalue.xyz.

Bonus A: All'apertura del servizio viene richiesta la parte randomizzata
della URL. L'utente che non la possiede può chiederne una.

Bonus B: Ai post è associato un tag "importante". L'utente può
visualizzare solo i post-it "importanti"

Valutazione: per almeno due dei tre criteri di valutazione definiti sopra
il progettino deve risultare "corretto". Altrimenti il progettino viene
rifiutato. La valutazione di base, con solo due criteri soddisfatti è 18.
Con tre criteri soddisfatti è 22. Ciascuno dei successivi Bonus vale un
massimo di 3 punti. Quindi la valutazione massima del progettino è 28
punti. Questa corrisponde quella di partenza, espressa in trentesimi) per
la prova orale. La prova orale può compromettere interamente l'esame. Al
termine di una prova orale negativa viene definito se il progetto viene
mantenuto o se invece va ripresentato.

Consiglio informale: valutate la lunghezza del codice TypeScript che state
scrivendo (soluzione base, Bonus esclusi), sommando quello di tutti i
componenti: ne dovrebbero bastare un centinaio. Quando cominciate ad
avvicinarvi alle 300 può darsi che ci sia qualcosa che non va:

* non state usando bene il linguaggio
* state aggiungendo features non richieste
* fate in modo complicato qualcosa che potrebbe essere fatto in modo più
semplice

Poi fate il rapporto tra la lunghezza complessiva calcolata sopra e la
lunghezza del TypeScript più lungo. Se il rapporto è più di 0.75
probabilmente modularizzate male.

Esempio: un progettino suddiviso in 2 componenti e un servizio. Le righe di
app-root sono 200, quella del servizio 20 e quella del secondo componente
30. Il progetto è già pericolosamente vicino al limite delle 300 righe
(250). Ma il rapporto è 200/250 = 0.8. Vale la pena di riconsiderarlo
attentamente...
Ci vediamo mercoledì per parlarne.
 */

//NB: FARE OGGETTI FANTOCCIO e cercare di far funzionare con quelli

import { Variable } from "@angular/compiler/src/render3/r3_ast";
import { Component, VERSION } from "@angular/core";
//import { PostitService } from "./postit.service";

export interface postInterf {
  title: string;
  mess: string;
  tag: string;
}

export class postIt implements postInterf {
  title: string;
  mess: string;
  tag: string;

  constructor() {
    this.title = "";
    this.mess = "";
    this.tag = "";
  }

  setTitle(_title: string) {
    this.title = _title;
  }
  getTitle() {
    return this.title;
  }

  setMess(_mess: string) {
    this.mess = _mess;
  }
  getMess() {
    return this.mess;
  }

  setTag(_tag: string) {
    this.tag = _tag;
  }
  getTag() {
    return this.tag;
  }
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Post-It";
  listaPostIt: Array<postIt>;
  selezione: number = 0;

  //posso fare una funzione scelta che in base al valore selezionato fa partire una funzione
  creaNuovo() {
    this.selezione = 1;
    //console.log("ciao");
  }
  annulla() {
    this.selezione = 0;
  }

  conferma() {
    //DEVO USARE OBSERVABLE, SUBSCRIBE PER PROGRAMMAZIONE ASINCRONA

    var pi: postIt = new postIt();

    var _title: string = document.getElementById("titolo").innerHTML;
    var _mess: string = document.getElementById("mess").innerHTML;
    var _tag: string = document.getElementById("tag").innerHTML;

    pi.setTitle(_title);
    pi.setMess(_mess);
    pi.setTag(_tag);

    //console.log(pi);
  }
}
