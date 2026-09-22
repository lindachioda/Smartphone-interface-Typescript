
## 🛠️ Tecnologie utilizzate

* TypeScript
* Object-Oriented Programming (OOP)
* Interfaces

  
# 📱 Smartphone

Design an interface called `Smartphone` to represent a mobile phone with a prepaid plan. The interface includes two instance properties: `carica`, which represents the amount of money available for phone calls, and `numeroChiamate`, which represents the number of calls made using the mobile phone.
The classes `FirstUser`, `SecondUser`, and `ThirdUser` must implement the `Smartphone` interface and provide all the required methods.

The cost of each call is **€0.20 per minute**.

Objective: Check the remaining balance and the number of calls made for each user.

## 🧰 Properties

* `carica: number` — the amount of money available for calls
* `numeroChiamate: number` — the number of calls made

## ⚙️ Methods

* `ricarica(unaRicarica: number): void` — adds credit to the mobile phone
* `chiamata(minutiDurata: number): void` — makes a call for the specified number of minutes, deducts the corresponding cost from the available credit, and increments the number of calls made
* `numero4040(): number` — returns the current available credit
* `getNumeroChiamate(): number` — returns the total number of calls made
* `azzeraChiamate(): void` — resets the number of calls made to zero


