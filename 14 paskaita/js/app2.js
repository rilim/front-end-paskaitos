
let mokiniai = new XMLHttpRequest(); //1.sukuriamas naujas objektas
mokiniai.onreadystatechange = function() { //2.callback
	if (mokiniai.readyState === 4) {
		if (mokiniai.status === 200) {
			//json faile pateikta informacija sudedama į masyvą ir išsaugoma kintamąjame sarasas
			let sarasas = JSON.parse(mokiniai.responseText); 
			
			for (let i = 0; i < sarasas.length; i++) {
				let li = document.createElement('li');
				document.querySelector('ul').appendChild(li);
				//pakeičia teksto spalvą priklausomai nuo lokacijos reikšmės, jei true - tai žalia spalva
				if (sarasas[i].lokacija === true) { 
				li.setAttribute('style', 'color:green');
				li.textContent = sarasas[i].vardas + " Lokacija: " + sarasas[i].lokacija;

				console.log(sarasas[i]);
				} else { // jei false - raudona spalva
				li.setAttribute('style', 'color:red');
				li.textContent = sarasas[i].vardas + " Lokacija: " + sarasas[i].lokacija;

				console.log(sarasas[i]);
				};
			};
			console.log(mokiniai.statusText);
		} else {
			console.log(mokiniai.statusText);
		}
	}


};

mokiniai.open('GET', 'mokiniai.json'); //3.uzklausa
mokiniai.send(); // 4.uzklausos paleidimas
	
/*-------------------------------------------*/

/*Tas pats kaip viršuj (išveda sąrašą iš mokiniai.json), tik naudojant fetch*/
// const mokiniai = async () => {
// 	data = await fetch ('mokiniai.json').then(res => res.json());
// };

// const showData = async () => {
// 	await mokiniai();
// 	console.log(data)
// 	for (let i = 0; i < data.length; i++) {
// 				let li = document.createElement('li');
// 				document.querySelector('ul').appendChild(li);
// 				//pakeičia teksto spalvą priklausomai nuo lokacijos reikšmės, jei true - tai žalia spalva
// 				if (data[i].lokacija === true) { 
// 				li.setAttribute('style', 'color:green');
// 				li.textContent = data[i].vardas + " Lokacija: " + data[i].lokacija;

// 				console.log(data[i]);
// 				} else { // jei false - raudona spalva
// 				li.setAttribute('style', 'color:red');
// 				li.textContent = data[i].vardas + " Lokacija: " + data[i].lokacija;

// 				console.log(data[i]);
// 				};
// 			};
// };

// showData();

