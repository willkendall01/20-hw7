 class Art {
	constructor(name, price, lg_img, sml_img) {
		this.name = name
		this.price = price
		this.small_img = lg_img;
		this.large_img = sml_img;

	}
}

var animals = new Art("Wild", "$111,449", "Horse.jpeg", "Horse.jpeg")
var chevron = new Art("Home", "$1,000", "OurHouse.jpeg", "OurHouse.jpeg")
var breaths = new Art("Breathe Together", "$500,000", "tower.jpg", "tower.jpg")
var crimson = new Art("Whiskers", "$432", "Whiskers.jpeg", "Whiskers.jpeg")
var breathe = new Art("Connect", "$250,000", "connect.jpeg", "connect.jpeg")


var gallery = new Array(animals, chevron, breaths, crimson, breathe);


function build_gallery() {
	var i = 1;
	for (i; i < 6; i++) {
		$("#"  + 'thumb' + i).html("<div class='overlay-off' id='ol_" + 
			i +"'> Name: " + gallery[i-1].name + " </br> Price: " +  
			gallery[i-1].price + "</div> <img id='img" + i + 
			"'class='pic' src='" + gallery[i - 1].large_img + "'>  ");

	}
}




$(".thumbnail").mouseenter(function() {
	$("#hm").html("<img class='banner' src='" + gallery[parseInt(this.id[5]) - 1].large_img + "' style='display: none'>");
	$(".banner").fadeIn();
	})

$(".thumbnail").click(function() {
	var ind = this.id[5]
	$("#" + "ol_" + ind + "").toggleClass("overlay-off overlay");
		setTimeout( function() 
			{ $("#" + "ol_" + ind + "").toggleClass("overlay overlay-off");}, 5000);
	})


	
build_gallery();
