"use strict"

/*Paprašoma įvesti svečių skaičių, tuomet įvedama tiek svečių kiek nurodėm ir pabaigus išvedamas jų sąrašas*/

var sveciuSkaicius = prompt("Įveskite svečių skaičių:");
console.log("Pasirinkta pakviesti " + sveciuSkaicius + " žmonių/-es")
var sveciai = [];

for (var i = 0; i <sveciuSkaicius; i++){
    var svecias = prompt("Įvesk " + (i+1) + " svečią:")
    sveciai.push(svecias); //arba sveciai.push(prompt("Svecio vardas"));
}

// for (var i = 0; i < sveciai.length; i++) {
//     console.log((i + 1) + ": " + sveciai[i]);
// }

console.log("Svečių sąrašas:")
for (svecias of sveciai){
    console.log(svecias);
}

/*------------------------------------------*/
/*switch naudojimas*/
var kalba = "lt";

switch(kalba){
    case "lt":
        console.log("Sveiki");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log("Nerasta tokia kalba");
}

/*------------------------------------------*/

var ivertinimai = ["puikiai", "labai gerai", "gerai", "ne taip gerai", "patenkinamai", "prastai",
    "silpnai", "blogai", "labai blogai", "neik i mokykla"];

var mokinys = [];

var vardas = prompt("Ivesk mokinio varda");
mokinys.push(vardas);
for (var i = 0; i < 3; i++){
    var ivertinimas = prompt("Ivesk " + (i+1) + " ivertinima:");

    switch (ivertinimas) {
        case "10":
            mokinys.push(ivertinimas + " (" + ivertinimai[0] + ")");
            break;
        case "9":
            mokinys.push(ivertinimas + " (" + ivertinimai[1] + ")");
            break;
        case "8":
            mokinys.push(ivertinimas + " (" + ivertinimai[2] + ")");
            break;
        case "7":
            mokinys.push(ivertinimas + " (" + ivertinimai[3] + ")");
            break;
        case "6":
            mokinys.push(ivertinimas + " (" + ivertinimai[4] + ")");
            break;
        case "5":
            mokinys.push(ivertinimas + " (" + ivertinimai[5] + ")");
            break;
        case "4":
            mokinys.push(ivertinimas + " (" + ivertinimai[6] + ")");
            break;
        case "3":
            mokinys.push(ivertinimas + " (" + ivertinimai[7] + ")");
            break;
        case "2":
            mokinys.push(ivertinimas + " (" + ivertinimai[8] + ")");
            break;
        case "1":
            mokinys.push(ivertinimas + " (" + ivertinimai[9] + ")");
            break;

    }

}

console.log("Mokinys ir jo ivertinimai:")
for (i of mokinys){
    console.log(i);
}

/*------------------------------------------*/

var mokiniai = [
    {
    vardas:"Andrius",
        rezultatai:{
            matematika:7,
            lietuviu:6,
            php:10
        }
    },
    {
    vardas:"Ieva",
        rezultatai:{
        matematika:6,
        lietuviu:4,
        php:4
        }
    },
{
    vardas:"Jurgita",
        rezultatai: {
        matematika:10,
        lietuviu: 9,
        php: 10
    }
}
]

for(mokinys of mokiniai){
    for(var duomenys in mokinys){
        if(duomenys!="rezultatai") {
            console.log(mokinys[duomenys])
        }else{
            console.log("Rezultatai: ")
            for (var rezultatai in mokinys[duomenys]){
                console.log(rezultatai + ":" + mokinys[duomenys][rezultatai])
            }
        }
    }
}
/*------------------------------------------*/

/*Knygų katalogas*/
var katalogas = {
    grozine: [
        {
        ISBN: "111abc",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        },
        {
        ISBN: "222abc",
        "Leidimo metai": 2008,
        Pavadinimas:"kazkoks pavadinimas",
        "Puslapiu skaicius": 254
        },
        {
        ISBN: "333abc",
        "Leidimo metai": 2018,
        Pavadinimas:"o ne, kazkas ne taip",
        "Puslapiu skaicius": 113
        }
    ],
    moksline: [
        {
        ISBN: "123def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        },
        {
        ISBN: "456def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        },
        {
        ISBN: "789def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        }
    ],
    fantastika: [
        {
        ISBN: "123def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        },
        {
        ISBN: "456def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        },
        {
        ISBN: "789def",
        "Leidimo metai": 2010,
        Pavadinimas:"Rimts pavadinims",
        "Puslapiu skaicius": 300
        }
    ]
};











