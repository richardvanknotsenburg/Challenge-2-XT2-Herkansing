// var myVar = "Hamster";

// var myArray = new Array();
// myArray[0] = "Hamster";
// myArray[1] = "Cavia"; //Geef je een nummer

// var myObject = new Object();
// MyObject.naam = "Bob";
// MyObject.achternaam = "Jansen"; //Ipv een nummer, geef je het een naam
// myObject.fullname = function() {
// 	return myObject.naam + ' ' + myObject.achternaam; 
// }

// myObject.fullname();

		/*Oefenen met object en array*/
/*------------------------------------------*/

// var today = new Date();

// document.getElementById('clock').innerHTML = today.toString(); //Voor alles wat binnen de tag staat. Geeft alles wat die weet over de tijd (iets te veel wel)

// document.getElementById('clock').innerHTML = today.getDate(); //dag van de maand
//document.getElementById('clock').innerHTML = today.getMonth() + 1; // Januari is maand 0 (today.getMonth() + 1 is de oplossing.)
//document.getElementById('clock').innerHTML = today.getYear(); // Deprecated - niet gebruiken.
//document.getElementById('clock').innerHTML = today.getFullYear();
//document.getElementById('clock').innerHTML = today.getDay(); // Zondag is dag 0 

//document.getElementById('clock').innerHTML = today.getHours();
//document.getElementById('clock').innerHTML = today.getMinutes();
//document.getElementById('clock').innerHTML = today.getSeconds();
//document.getElementById('clock').innerHTML = today.getMilliseconds();

//document.getElementById('clock').innerHTML = today.getDate() + '/' + (today.getMonth()+1);

// var dagenWeek = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
// var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
// document.getElementById('clock').innerHTML = dagenWeek[today.getDay()] + ' </br> ' + today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();


//document.getElementById('clock').innerHTML = today.getTime();

/*------------------------*/



function klok(){
	var today = new Date(); //moet binnen de functie, het ververst elke keer.
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hours = today.getHours();
	
	


	/*------ Dagdelen --------*/

	//Ochtend uren van 6:00 tot 11:59
	if (hours >= 6 && hours <= 11) { //tussen een bepaalde tijd (van 9 tot 21 hier // && betekend en)
		document.getElementById('body').classList.add('ochtendDagdeel');
		document.getElementById('body').classList.remove('nachtDagdeel');
	}
	//middag uren van 12:00 tot 17:59
	else if (hours >= 12 && hours <= 17){
		document.getElementById('body').classList.remove('ochtendDagdeel');
		document.getElementById('body').classList.add('middagDagdeel');
	}

	//avond uren van 18:00 tot 23:59
	else if (hours >= 18 && hours <= 23){
		document.getElementById('body').classList.remove('middagDagdeel');
		document.getElementById('body').classList.add('avondDagdeel');
	}

	//avond uren van 00:00 tot 5:59
	else if (hours >= 0 && hours <= 5){
		document.getElementById('body').classList.remove('avondDagdeel');
		document.getElementById('body').classList.add('nachtDagdeel');
	}

	//speelt de purge sound effect als de lockdown van start gaat.. scarryyyyy 
	if (hours > 20 && hours < 22) /*21 uur*/{
		if (minutes >= 0 && minutes < 1) /*minuut 0*/{
			if (seconds >=0 && seconds < 1) /*seconde 0 */{
				var audio= document.getElementById("myaudio");
				audio.play();
			}
		}
		
	}

					
						

	/*-------- Afrondingen van getallen (de 0 ervoor) --------*/


	if (hours < 10){
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}


	if (seconds < 10){
		seconds = '0' + seconds; //om een voorloop nul te krijgen (01/02/03 ipv 0/1/2)
	}

	//het ook daadwerkelijk afspelen
	document.getElementById("clock").innerHTML = hours + ':' + minutes + ':' + seconds;
}

//zorgt dat de klok geladen wordt in intevals van 1000 miliseconden (per 1 seconden)
klok();
setInterval(klok, 1000);







