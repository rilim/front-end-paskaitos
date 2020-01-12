/*Skriptas, kuris paspaudus mygtuką įmeta sąrašą sukurtą menu.html faile*/
let manoAjax = new XMLHttpRequest(); //1.sukuriamas naujas objektas
manoAjax.onreadystatechange = function() { //2.callback
	if (manoAjax.readyState === 4) {
		if (manoAjax.status === 200) {
			document.querySelector('aside').innerHTML = manoAjax.responseText;
		} else {
			alert(manoAjax.statusText);
		}
	}
};

manoAjax.open('GET', 'menu.html'); //3.uzklausa
document.querySelector('button.showMenu').onclick = function(){
	manoAjax.send(); // 4.uzklausos paleidimas
	document.querySelector('button.showMenu').style.display="none";
};
/*-----------------------------------------------------------------*/








