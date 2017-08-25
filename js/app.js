/*
 * Archivo principal de JS
 */
 var modal = document.getElementById('myModal');
var img;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function viewimage(e){

	img=e.target; //todo lo que contiene el elemento
	modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

var cont = document.getElementsByClassName('row')[0];
cont.addEventListener('click',viewimage);

