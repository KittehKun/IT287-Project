let navbar = document.getElementById("navItems");
let item = navbar.getElementsByTagName("li");
let leftNavbar = document.getElementById("leftNavbar");
let aItem = leftNavbar.getElementsByTagName("span");

for(let i = 0; i < item.length; i++){
	item[i].addEventListener("mouseenter", function(event){
	//Adds background color
	event.target.style.backgroundColor = "black";	
	})
	item[i].addEventListener("mouseout", function(){
	//Removes background color
	item[i].removeAttribute("style");
	})
}

for (let i = 0; i < aItem.length; i++){
	aItem[i].addEventListener("mouseenter", function(event){
	//Adds background color and changes text to white
	event.target.style.backgroundColor = "black";
	event.target.style.color = "white";	
	})
	aItem[i].addEventListener("mouseout", function(event){
	//Removes background color
	if(event.target.id != "active"){
		event.target.style.backgroundColor = "white";
		event.target.style.color = "black";	
	}
	})
}