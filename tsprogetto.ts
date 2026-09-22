//Progettare una interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
//Tale interfaccia prevede due variabili d'istanza: 
//1) carica:number = rappresenta il quantitativo di euro disponibile per le chiamate. 
//2) numeroChiamate:number = rappresenta il numero di chiamate effettuate con il cellulare. 

// La classi = FirstUser-SecondUser-ThirdUser deve dichiarare nell'interfaccia e implementare nelle classi i seguenti METODI: 
//1) public void ricarica(double unaRicarica), che ricarica il telefonino.
//2) public void chiamata(double minutiDurata), che effettua una chiamata di durata in minuti specificata dal parametro esplicito. Tale metodo dovrà aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino. 

//Si assuma un costo di 0.20 euro per ogni minuto di chiamata,
//un metodo public number numero404(), che restituisce il valore della carica disponibile. 
//Un metodo public number getNumeroChiamate(), che restituisce il valore della variabile d'istanza numeroChiamate.
//un metodo public void azzeraChiamate(), che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.

//Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.

interface Smartphone {
    carica: number
    numeroChiamate: number

    ricarica(unaRicarica:number):void
    chiamata(unaChiamata:number):void
    Numero404(unaRicarica:number, spesaChiamata:number):number
    NumeroChiamate():number
    azzeraChiamate():void
}

class FirstUser implements Smartphone {
    carica: number
    numeroChiamate: number

    constructor( carica: number = 0, numeroChiamate: number = 0){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica:number):void { //con void non posso inserire return!!!
        this.carica += unaRicarica //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`)
    }

    chiamata(unaChiamata:number):void {
        let addebito = unaChiamata * 0.20
        this.carica -= addebito //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate ++ //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`)
        console.log(`Saldo attuale: ${this.carica}€.`) //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`)
    }

    Numero404():number {
        console.log(`Carica disponibile: ${this.carica}€.`)
        return this.carica 
    }

    NumeroChiamate():number {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`)
        return this.numeroChiamate
    }

    azzeraChiamate():void {
        this.numeroChiamate = 0
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`)
    }
}

let firstuser:FirstUser = new FirstUser()
//effettua ricarica 
firstuser.ricarica(20)
firstuser.chiamata(1)
firstuser.Numero404()
firstuser.NumeroChiamate()
firstuser.azzeraChiamate()

class SecondUser implements Smartphone {
    carica: number
    numeroChiamate: number

    constructor( carica: number = 0, numeroChiamate: number = 0){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica:number):void { //con void non posso inserire return!!!
        this.carica += unaRicarica //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`)
    }

    chiamata(unaChiamata:number):void {
        let addebito = unaChiamata * 0.20
        this.carica -= addebito //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate ++ //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`)
        console.log(`Saldo attuale: ${this.carica}€.`) //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`)
    }

    Numero404():number {
        console.log(`Carica disponibile: ${this.carica}€.`)
        return this.carica 
    }

    NumeroChiamate():number {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`)
        return this.numeroChiamate
    }

    azzeraChiamate():void {
        this.numeroChiamate = 0
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`)
    }
}

let seconduser:SecondUser = new SecondUser()
//effettua ricarica 
seconduser.ricarica(40)
seconduser.chiamata(2)
seconduser.Numero404()
seconduser.NumeroChiamate()
seconduser.azzeraChiamate()


class ThirdUser implements Smartphone {
    carica: number
    numeroChiamate: number

    constructor( carica: number = 0, numeroChiamate: number = 0){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica:number):void { //con void non posso inserire return!!!
        this.carica += unaRicarica //+= per implementare this!!!
        console.log(`Effettuata una ricarica di ${unaRicarica}€`)
    }

    chiamata(unaChiamata:number):void {
        let addebito = unaChiamata * 0.20
        this.carica -= addebito //sottrai prezzo della chiamata appena effettuata
        this.numeroChiamate ++ //aggiungi una chiamata con ++ per aggiornare this
        console.log(`Chiamata terminata.`)
        console.log(`Saldo attuale: ${this.carica}€.`) //a cui ho sottratto 20 cent
        console.log(`Durata della chiamata: ${unaChiamata} min.`)
    }

    Numero404():number {
        console.log(`Carica disponibile: ${this.carica}€.`)
        return this.carica 
    }

    NumeroChiamate():number {
        console.log(`Numero chiamate effettuate: ${this.numeroChiamate}.`)
        return this.numeroChiamate
    }

    azzeraChiamate():void {
        this.numeroChiamate = 0
        console.log(`Chiamate azzerate: ${this.numeroChiamate}.`)
    }
}

let thirduser:ThirdUser = new ThirdUser()
//effettua ricarica 
thirduser.ricarica(50)
thirduser.chiamata(4)
thirduser.Numero404()
thirduser.NumeroChiamate()
thirduser.azzeraChiamate()



