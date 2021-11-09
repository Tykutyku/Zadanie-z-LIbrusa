
// Zadanie 1
// Pusty obiekt
var obiekt = {};
// let używamy dla zmiennych które będą zmieniały wartość i referencje
// Używając const nie deklarujemy stałej wartości, a stałą referencję czyli łatwiej kontrolować jeśli jest obiektem to nie zmieni się w string,
const a = {};
let b = {};
a.test = 'test';
b.test = 'test';

a = 'test';
b = 'test';

//Zadanie 2

/*Sześć typów danych rodzaju primitives:
- Boolean  true oraz false.
- null  Specjalne słowo kluczowe oznaczające wartość zerową. 
- undefined   Najwyższa właściwość, której wartość jest nieokreślona.
- Number  liczby
- String  ciągi znaków
- Symbol  Typ danych, gdzie przykłady są niepowtarzalne i niezmienne.
oraz typ złożony
- Object (do którego można również zaliczyć podtypy functions i array)*/
//Zadanie 3
let isAuthorized = false;
let isClicked = false;

if ( isAuthorized,isClicked == true){
    console.log("Operacja udana")
}

if ( isAuthorized,isClicked == false){
    console.log("Operacja nieudana")
}

 let isAuthorized = true;
let isClicked = true;

if ( isAuthorized,isClicked == true){
    console.log("Operacja udana")
}

if ( isAuthorized,isClicked == false){
    console.log("Operacja nieudana")
}
//Zadanie 4
let isAuthorized = true;
let isClicked = false;

if ( isAuthorized == true,isClicked == false){
    console.log("Operacja udana")
}

if ( isAuthorized == false,isClicked == true){
    console.log("Operacja nieudana")
}

 let isAuthorized = false;
let isClicked = true;

if ( isAuthorized == true,isClicked == false){
    console.log("Operacja udana")
}

if ( isAuthorized == false,isClicked == true){
    console.log("Operacja nieudana")
}
//Zadanie 5
let text = "To jest Test";
let letter = text.charAt(4);

console.log("5 znakiem jest " +text.charAt(4));

//Zadanie 6
const xd1 =  "Daniel Mateusz ";
const xd2 = "Kornelia Alan ";
const xd3 = xd1.concat(xd2); 
console.log(xd3);

// Zadanie 7 
var tekst = ["Atrament","Tarka","Kaktus","Trampek"];
var i = (tekst.length -1);
var a = i

for (let i=a; i>-1; i--) {
    console.log("-       -");
    var xd1 = tekst[i];
    var xd2 = xd1.charCodeAt(0);
    if(xd2 == 84)
    {
console.log("Wyraz został usunięty");
    } else{

console.log(tekst[i]);
    }
}
console.log("-       -");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("-=-----=-");
console.log("Lista wyrazów");
console.log("-=-----=-");
console.log("---------");
for (let i=a; i>-1; i--) {
    var xd1 = tekst[i];
    console.log(tekst[i])
}
//Zadanie 8
var tekst = ["Atrament","Tarka","Kaktus","Trampek"];
var i = (tekst.length -1);
var a = i
var b = 0

for (let i=a; i>-1; i--) {
    console.log("-       -");
    b = b + 1
    var xd1 = tekst[i];
    console.log(b+" "+xd1)
}

// Zadanie 9
/*Klasy w Javascript zostały wprowadzone jako pomoc dla istniejącego, opartego na prototypach modelu dziedziczenia.
Składnia klas nie wprowadza nowego zorientowanego obiektowo modelu dziedziczenia.
Klasy wprowadzają znacznie prostszą i bardziej czytelną składnię do tworzenia obiektów i dziedziczenia.*/

class UserPersonalInfo {
  constructor(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
  }
 get id(){
     return this.caleId();
 } 
  caleId() {
    return this.imie + this.nazwisko;
  }
}
//Zadanie 10
//Konstruktor jest specjalną metodą tworzenia i inicjowania obiektu utworzonego w klasie.

Przykład:

class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);

//Konstruktor umożliwia zdefiniowanie inicjalizacji obiektu, która musi się wykonać, zanim będzie można wywołać metody obiektu.

class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();

//Jeśli niestandardowy konstruktor nie został podany, to domyślny konstruktor będzie użyty. Dla klas bazowych konstruktor domyślny jest pusty:

constructor() {}

//Dla klas pochodnych domyślny konstruktor wywołuje konstruktor klasy nadrzędnej:

constructor(...args) {
  super(...args);
}
//Zadanie 11
/*Metoda statyczna - do użycia jej nie są wymagane tworzenie obiektu. 
Najczęściej metody statyczne są wykorzystywane, jeśli chcemy wykonąc ten sam algorytm w wielu miejscach w projekcie. 
Na przykład możemy stworzyć metodę, która będzie przyjmować obiekt Item i na jego podstawie wydrukuje nam nazwę itema na konsolę. 
Algorytm nie powinien zmieniać stanu obiektów, na których operuje. 
Jeśli stan ten jest zmieniany (na przykład zmieniana jest nazwa obiektu albo jego id, czy też inne dane zapisane w jego polach), wówczas nie powinniśmy korzystać z metody statycznej.*/



//Zadanie 12
/* Komunikacja HTTP realizowana jest poprzez wysłanie żądania przez klienta (request) do serwera, który następnie generuje odpowiedź (response), 
Klienci mogą interpretować uzyskane odpowiedzi, na przykład przeglądarka internetowa potrafi wyświetlić stronę internetową, która została przesłana przez serwer.
Zasobem może być obrazek, strona HTML czy plik z kodem JavaScript. 
Sam protokół HTTP nie określa czym dokładnie jest zasób. Określa jedynie sposób w jaki można dostać się do zasobów.
 Każdy zasób ma swój unikalny identyfikator. Ten identyfikator to URI.*/

//w momencie zatwierdzenia adresu wpisanego w pasku przeglądarki stosujemy GET

 /* DELETE - Zapytania tego typu służą do usuwania zasobów.
  Na przykład w którymś z wcześniejszych zapytań dany zasób może być utworzony przy pomocy żądania typu POST.
  Następnie może on być usunięty przy pomocy DELETE.

  Specyfikacja mówi, że żądania typu POST są przetwarzane przez serwer zgodnie z założeniami dla danego zasobu.
  Taki skomplikowany opis sprowadza się do:
    używania POST do przesyłania zawartości formularzy,
    dodawania nowego zasobu,
    dodawanie danych do istniejącego zasobu.

    W sytuacji, gdy potrzebujemy zaktualizować tylko kilka właściwości rekordu, zastosujemy metodę PATCH.

W treści wiadomości PATCH znajduje się ciąg informacji o tym, jakie pole i w jaki sposób zmienić. 
Jeżeli wskazywany zasób jeszcze nie istnieje, może on zostać utworzony, jeżeli informacje o zmianach zawierają wszelkie wymagane parametry.*/




