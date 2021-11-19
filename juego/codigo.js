document.getElementById("player").addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 5;
necesarios = 5;

function sumarPuntos() {
	puntos ++;
	document.getElementById("puntos").innerHTML = "&nbsp;&nbsp;Puntos: " + puntos + "/" + necesarios;
	randNum = Math.round(Math.random()*420);
	document.getElementById("player").style.marginTop = randNum + "px";
	randNum2 = Math.round(Math.random()*420);
	document.getElementById("player").style.marginLeft = randNum2 + "px";
	if (puntos == 5){
		abrirModal("¡Ganaste!");
	}
}

function restarTiempo() {
	if (tiempo > 0 && puntos < 5) {
		tiempo --;
	} 
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;Tiempo: " + tiempo;
	if (tiempo == 0) {
		abrirModal("¡Perdiste!");
	} 
}



setInterval(restarTiempo,1000);

const abrirModal = msj => {
   document.querySelector(".mensaje").innerHTML = msj;
   let modal = document.querySelector(".modal-background");
   modal.style.display = "flex";
   modal.style.animation = "aparecer 1s forwards";
}
