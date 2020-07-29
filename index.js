//  Banner display function


document.getElementById("banner").style.visibility= "hidden";


function show_banner() {
	document.getElementById("banner").style.visibility = "visible";
}
setTimeout("show_banner()", 3000);

var banner_btn = document.getElementById("banner_btn");

banner_btn.addEventListener('click',() => {

	document.getElementById("banner").style.visibility = "hidden";
});


// zipcode_checker Javascript function

function zip_checker() {

	var accepted_zip = [33401,33402,33403,33404,33405,33406,33407,33408,33409,33410,
	33411,33412,33413,33414,33415,33416,33417,33418,33419,33420];

	var input_zip = document.getElementById("zipcode").value;
	if(input_zip >= 10000 && input_zip <= 99999){
		var match = false;

		for( var i=0; i < accepted_zip.length ; i++)
		{
			if (accepted_zip[i] == input_zip){
				match= true;
				break;
			}
		}

		if(match == true){

			document.getElementById("zip_display").style.color="Green";
			document.getElementById("zip_display").innerText="We've got your area covered!";
		}
		else{

			document.getElementById("zip_display").style.color="red";
			document.getElementById("zip_display").innerText="Sorry, we haven't expanded to that area yet.";
		}
	}else { 

		document.getElementById("zip_display").style.color="red";
		document.getElementById("zip_display").innerText="Please enter 5 digit zipcode.";		  
	}

}


// Featuring restaurant discount display 

document.getElementById("span_15_perct_off").style.visibility= "hidden";
document.getElementById("span_5_perct_off").style.visibility= "hidden";
document.getElementById("span_10_perct_off").style.visibility= "hidden";

var img_shrimp = document.getElementById("shrimp_img");
var img_samosa = document.getElementById("samosa_img");
var img_dessert = document.getElementById("dessert_img");

img_shrimp.addEventListener("mouseover",mouseOverShrimp);
img_shrimp.addEventListener("mouseout",mouseOutShrimp);

img_samosa.addEventListener("mouseover",mouseOverSamosa);
img_samosa.addEventListener("mouseout",mouseOutSamosa);

img_dessert.addEventListener("mouseover",mouseOverDessert);
img_dessert.addEventListener("mouseout",mouseOutDessert);

function mouseOverShrimp() {	//image_Shrimp 

	document.getElementById("span_15_perct_off").style.visibility= "visible";
}

function mouseOutShrimp() {
	document.getElementById("span_15_perct_off").style.visibility= "hidden";
}


function mouseOverSamosa() {	//image_Samosa

	document.getElementById("span_5_perct_off").style.visibility= "visible";
}

function mouseOutSamosa() {
	document.getElementById("span_5_perct_off").style.visibility= "hidden";
}


function mouseOverDessert() {		//image_dessert											

	document.getElementById("span_10_perct_off").style.visibility= "visible";
}

function mouseOutDessert() {
	document.getElementById("span_10_perct_off").style.visibility= "hidden";
}