// Crea una referencia para el elemento canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escribe el código para obtener el evento key-pressed

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//Escribe el código para verificar el tipo de tecla que se presionó
	else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	//Sube la imagen con el mensaje. 

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
canvas=document.getElementById("myCanvas");
ctx=canvas("2d");
window.appEventListener("keydown",my_keydown);
function keydown(e){
	keyPressed=e.keyCode;
	console.log(keyPressed);
	if ((keyPressed>=97 && keyPressed<=122 )||(keyPressed>=65 && keyPressed<=90)) 
	{
		alphabetKey();
		document.getElementById("d1").innerHTML = "you pressed alphabet key";
		console.log("alphabet key");
	}
}
function alphabetKey(){
	img_image="Alpkey.png";
	add();
	
}