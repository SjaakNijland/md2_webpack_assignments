import './les_6';
/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
    var name = "sjaak";
    var lastName = "nijland";
    var City = "monnickendam";
    var food = "chicken";
    var partnerInCrime = "reus";

    var age = 18;
    var money = 18000;
    var earns = 18;
    var GB = 184;
    var websites = 128;

    var internet = true;
    var connection = true;
    var homework = false;
    var yes = true;
    var willem = true;
    
/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 **/
    var games = ['killzone','last of us', 'god of war','little big planet'];
    var nummers = [1,2,3,4,5,6,7,8,9];
    var djs = ['coone','hard driver','ran-d','atmozfears'];
    console.log(50);
/** console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
    var array =[];
    array.push('kip');
    console.log(array);
/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
    var namen = ['lucas','willem','tom','sjaak'];
    namen.splice(0,2);
    console.log(namen);
/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */
 var car = {type:'fiat', country:'nederland', style:'street',radio: 'FM/AM',topspeed:'210km' ,fuel:'diesel',price:'20k',status:'new',wheel:'4',onsale:'2017'};
 var shirt = {type: 'long', size:'s', color:'grey'};
 var eten = {type: 'kip', kilo:'gram'};
 var draft ={type:'fifa', team:'198'};
 var laptop= {type:'dell', GB:'170'};
 var willem = {leeftijd:'18',geslacht:'man'};
 var tom = {leeftijd:'17',geslacht:'man'};
 var lucas = {leeftijd:'17',geslacht:'man'};
 var sjaak = {leeftijd:'18',geslacht:'man'};
 var bas = {leeftijd:'28',geslacht:'man'};
/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */
function multiply(value,multiplier) {
    value = 10;
    multiplier = 10;
    console.log(value * multiplier);

}
multiply();
function autos(wielen,frame) {
    wielen = 4;
    frame = 1;
    console.log(wielen + frame);

}
autos();

function toeren(snelheid,km) {
    snelheid = 20;
    km= 5;
    console.log(snelheid / km);
}
toeren();
function min(1,2) {
    1 = 20;
    2= 10;
    console.log(1 - 2);
}
min();
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */
function naam(firstName, lastName) {
   return firstName + lastName;


}
console.log(naam('sjaak ','nijland'));
/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */
var student = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    showName: function() {
        return this.firstName + " " + this.lastName;
    }
};
/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */
var students = ['sjaak','willem','tom','lucas','ernst','bobby','enderest','pepi','coki','kees'];
var i;
for(i=0; i < students.length;i++ ){
    console.log(students);
}

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
var voornaam = 'sjaak';
var achternaam = 'nijland';
var fullname = voornaam + achternaam;

console.log(fullname);

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */
    var naam = ['Sjaak','Willem','Tom','Tristan'];
    console.log(naam.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */
var willem = 'Willem is geweldig knap doordat hij zo mooien kaak lijn heeft!';
console.log(willem.replaceAll('i','a'));
/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'jouw antwoord');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */

/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */