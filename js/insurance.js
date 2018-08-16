// JavaScript Document


function getCreditScore()
{
	var score=280;
	return score;
}

function figurePrice(){
	var price=0;
	price = document.getElementById("hour").value*0.16;
	document.getElementById("price").innerHTML=price;
}
function jumpto(){
			var index=document.getElementById("hour").value;
			var url = "home.html?index="+index;
			window.location.href=url;
}