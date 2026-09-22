//Progettare una interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
//Tale interfaccia prevede due variabili d'istanza: 
//1) carica:number = rappresenta il quantitativo di euro disponibile per le chiamate. 
//2) numeroChiamate:number = rappresenta il numero di chiamate effettuate con il cellulare. 
class FirstUser {
    constructor(carica = 0, numeroChiamate = 0) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica; //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`);
    }
    chiamata(unaChiamata) {
        let addebito = unaChiamata * 0.20;
        this.carica -= addebito; //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate++; //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`);
        console.log(`Saldo attuale: ${this.carica}€.`); //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`);
    }
    Numero404() {
        console.log(`Carica disponibile: ${this.carica}€.`);
        return this.carica;
    }
    NumeroChiamate() {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`);
    }
}
let firstuser = new FirstUser();
//effettua ricarica 
firstuser.ricarica(20);
firstuser.chiamata(1);
firstuser.Numero404();
firstuser.NumeroChiamate();
firstuser.azzeraChiamate();
class SecondUser {
    constructor(carica = 0, numeroChiamate = 0) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica; //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`);
    }
    chiamata(unaChiamata) {
        let addebito = unaChiamata * 0.20;
        this.carica -= addebito; //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate++; //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`);
        console.log(`Saldo attuale: ${this.carica}€.`); //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`);
    }
    Numero404() {
        console.log(`Carica disponibile: ${this.carica}€.`);
        return this.carica;
    }
    NumeroChiamate() {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`);
    }
}
let seconduser = new SecondUser();
//effettua ricarica 
seconduser.ricarica(40);
seconduser.chiamata(2);
seconduser.Numero404();
seconduser.NumeroChiamate();
seconduser.azzeraChiamate();
class ThirdUser {
    constructor(carica = 0, numeroChiamate = 0) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica; //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`);
    }
    chiamata(unaChiamata) {
        let addebito = unaChiamata * 0.20;
        this.carica -= addebito; //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate++; //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`);
        console.log(`Saldo attuale: ${this.carica}€.`); //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`);
    }
    Numero404() {
        console.log(`Carica disponibile: ${this.carica}€.`);
        return this.carica;
    }
    NumeroChiamate() {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`);
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`);
    }
}
let thirduser = new ThirdUser();
//effettua ricarica 
thirduser.ricarica(50);
thirduser.chiamata(4);
thirduser.Numero404();
thirduser.NumeroChiamate();
thirduser.azzeraChiamate();
export {};
//# sourceMappingURL=tsprogetto.js.map