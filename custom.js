//jabascript For Toggle Menu Start
var navLink = document.getElementById("navlink");
 function showmenu(){
    navLink.style.right="0"
 }
 function hidemenu(){
    navLink.style.right="-999px"
 }
 //jabascript For Toggle Menu End

 //mixtiup
 const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });

//counter up 
jQuery(document).ready(function($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
//counter up end

//slick selaider
$('.single-item').slick({
	autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});

//Sticky Menu


$(document).ready(function() {
	$(".jsabout").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
});