// JavaScript Document
var img_width = 520;
var direction = 0;
var speed = 10;
var interval ;
/*
function mouseover(){
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	left.hidden = false;
	right.hidden = false;
	}
function mouseout(){
		var left = document.getElementById("left");
		var right = document.getElementById("right");
		left.hidden = true;
		right.hidden = true;
	}
*/	
function left(){
		var imgs = document.getElementById("right_main");
		var scrollLoction  = imgs.scrollLeft;
		
		if(scrollLoction%img_width == 0)
		{	
				direction = -1;
				imgs.scrollLeft += direction*speed;	
				interval = setInterval(move,20);
		}
	}
	
function right(){
		var imgs = document.getElementById("right_main");
		var scrollLoction  = imgs.scrollLeft;
		if(scrollLoction == 2080)
		{
			imgs.scrollLeft = 0;
			resetimg();
			setimg(0);
			return;
		}
		if(scrollLoction%img_width == 0)
		{
			direction = 1;
			imgs.scrollLeft +=  direction*speed;
			interval = setInterval(move,20);
		}

	}

function move(){
		var imgs = document.getElementById("right_main");
		var scrollLoction  = imgs.scrollLeft;
		if(scrollLoction % img_width == 0)
		{
			clearInterval(interval);
			resetimg();
			setimg(scrollLoction / img_width);
		}
		else
		{
			imgs.scrollLeft += direction*speed;	
		}
	}
function resetimg(){
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var img3 = document.getElementById("img3");
		var img4 = document.getElementById("img4");
		var img5 = document.getElementById("img5");
		img1.src = "images/page_not_selected.png";
		img2.src = "images/page_not_selected.png";
		img3.src = "images/page_not_selected.png";
		img4.src = "images/page_not_selected.png";
		img5.src = "images/page_not_selected.png";
	}
function setimg(i){
		switch (i)
		{
			case 0:
				var img1 = document.getElementById("img1");
				img1.src = "images/page_selected.png";
				break;	
			case 1:
				var img2 = document.getElementById("img2");
				img2.src = "images/page_selected.png";
				break;
			case 2:
				var img3 = document.getElementById("img3");
				img3.src = "images/page_selected.png";
				break;
			case 3:
				var img4 = document.getElementById("img4");
				img4.src = "images/page_selected.png";
				break;
			case 4:
				var img5 = document.getElementById("img5");
				img5.src = "images/page_selected.png";
				break;
		}
	}
	
function init(){
			var imgs = document.getElementById("right_main");
			imgs.scrollLeft=0;
			resetimg();
			setimg(0);
			setInterval(right,3000);
	}