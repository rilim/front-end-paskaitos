"use strict"
let katalogas = [
    {
        kategorija: "Grozine literatura",
        knyga: {
            isbn: "978-1-56619-909-4",
            leidimometai: 2019,
            pavadinimas: "Ausra",
            puslapiuSkaicius: 265
        }
    },
    {
        kategorija: "Grozine literatura",
        knyga: {
            isbn: "978-1-56619-920-4",
            leidimometai: 2018,
            pavadinimas: "Saturnas",
            puslapiuSkaicius: 165
        }
    },
    {
        kategorija: "Grozine literatura",
        knyga: {
            isbn: "444-1-56619-920-4",
            leidimometai: 2012,
            pavadinimas: "Menulis",
            puslapiuSkaicius: 485
        }

    },
    {
        kategorija: "Grozine literatura",
        knyga: {
            isbn: "485-5-56449-920-4",
            leidimometai: 2019,
            pavadinimas: "Ateiviai",
            puslapiuSkaicius: 366
        }
    },
    {
        kategorija: "Fantastika",
        knyga: {
            isbn: "485-5-54249-920-4",
            leidimometai: 2019,
            pavadinimas: "Marsieciai",
            puslapiuSkaicius: 477
        }
    },
    {
        kategorija: "Fantastika",
        knyga: {
            isbn: "888-5-54249-920-4",
            leidimometai: 2004,
            pavadinimas: "Kosmonautai",
            puslapiuSkaicius: 177
        }
    },
    {
        kategorija: "Fantastika",
        knyga: {
            isbn: "666-5-54249-666-4",
            leidimometai: 2019,
            pavadinimas: "Pragaras",
            puslapiuSkaicius: 666
        }
    },
    {
        kategorija: "Fantastika",
        knyga: {
            isbn: "555-5-54249-920-4",
            leidimometai: 2018,
            pavadinimas: "Velnio sunus",
            puslapiuSkaicius: 969
        }
    },
    {
        kategorija: "Detekyvai",
        knyga: {
            isbn: "5424-5-54249-920-4",
            leidimometai: 2018,
            pavadinimas: "Snipas",
            puslapiuSkaicius: 654
        }
    },
    {
        kategorija: "Detekyvai",
        knyga: {
            isbn: "5232-5-888-920-4",
            leidimometai: 2002,
            pavadinimas: "Sopranu kronikos",
            puslapiuSkaicius: 424
        }
    },
    {
        kategorija: "Detekyvai",
        knyga: {
            isbn: "88668-5-54249-920-4",
            leidimometai: 2010,
            pavadinimas: "Ieskomas",
            puslapiuSkaicius: 654
        }
    },
    {
        kategorija: "Detekyvai",
        knyga: {
            isbn: "8586-5-6456-920-4",
            leidimometai: 2012,
            pavadinimas: "Blogasis as",
            puslapiuSkaicius: 122
        }
    },
    {
        kategorija: "Pigiausios knygos",
        knyga: {
            isbn: "6454-5-54249-920-4",
            leidimometai: 2017,
            pavadinimas: "Verslas nuo 0",
            puslapiuSkaicius: 654,
            kaina: 14.63
            
        }
    },
    {
        kategorija: "Pigiausios knygos",
        knyga: {
            isbn: "765-5-8888-9206-4",
            leidimometai: 2018,
            pavadinimas: "Ekonomika tau",
            puslapiuSkaicius: 66,
            kaina:7.88
        }
    },
    {
        kategorija: "Pigiausios knygos",
        knyga: {
            isbn: "8445-555-868-920-77",
            leidimometai: 2018,
            pavadinimas: "Verslumas",
            puslapiuSkaicius: 255,
            kaina:9.44
        }
    },
    {
        kategorija: "Pigiausios knygos",
        knyga: {
            isbn: "8554-5-12315-920-4",
            leidimometai: 2014,
            pavadinimas: "Steve jobso autobiografija",
            puslapiuSkaicius: 212,
            kaina:16.75
        }
    }


];

// const paieska = prompt('iveskite knygos pavadinima');

// for(let i = 0; i < katalogas.length; i++){
//     if(katalogas[i].knyga.pavadinimas === paieska){
    
//         console.log('-----======= Knyga rasta =========----' +
//         '\nKategorija: ' + katalogas[i].kategorija +
//         '\nisbn: ' + katalogas[i].knyga.isbn +
//         '\nLeidimo metai: ' + katalogas[i].knyga.leidimometai +
//         '\nPavadinimas:' + katalogas[i].knyga.pavadinimas +
//         '\nPuslapiu skaicius: ' + katalogas[i].knyga.puslapiuSkaicius);
//     }

//    if(katalogas[i].knyga.leidimometai === 2018){
//    	console.log('-----======= Knygos išleistos 2018 =========----' +
//         '\nKategorija: ' + katalogas[i].kategorija +
//         '\nisbn: ' + katalogas[i].knyga.isbn +
//         '\nLeidimo metai: ' + katalogas[i].knyga.leidimometai +
//         '\nPavadinimas:' + katalogas[i].knyga.pavadinimas +
//         '\nPuslapiu skaicius: ' + katalogas[i].knyga.puslapiuSkaicius);
//    }
    
//     if(katalogas[i].kategorija === 'Pigiausios knygos'){
//         console.log("-----======= PIGIAUSIOS KNYGOS =======---------"); 
//         console.log(
//         '\nKategorija: ' + katalogas[i].kategorija +
//         '\nPavadinimas:' + katalogas[i].knyga.pavadinimas +
//         '\nKaina:' + katalogas[i].knyga.kaina.toPrecision(2));
            
//     }
      
// } //for ciklo pabaiga



for (let knygos of katalogas) {
    for (let duomenys in knygos) {
        if (duomenys != "knyga") {
            console.log(knygos[duomenys]);
        }
        else {
            console.log('\nKnyga:\n')
            for (let info in knygos[duomenys]) {
                if (knygos[duomenys][info] == '2018') {
                    console.log(info + ' : ' + knygos[duomenys][info])

                }
                else {
                    console.log(info + ' : ' + knygos[duomenys][info])
                }

            }
        }

    }
} 