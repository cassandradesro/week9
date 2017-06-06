console.log("Week 8 Homework main.js!");

// data about our slideshow.
// in a real website, this would come from a database, it wouldn/t just be hard-coded into this JS file.
var slides = [
	{full_size_filename: "assets/img/slide1.jpg", thumbnail_filename: "assets/img/slide1-thumbnail.jpg", title: "An image 1"},
	{full_size_filename: "assets/img/slide2.jpg", thumbnail_filename: "assets/img/slide2-thumbnail.jpg", title: "An image 2"},
	{full_size_filename: "assets/img/slide3.jpg", thumbnail_filename: "assets/img/slide3-thumbnail.jpg", title: "An image 3"},
	{full_size_filename: "assets/img/slide4.jpg", thumbnail_filename: "assets/img/slide4-thumbnail.jpg", title: "An image 4"},
	{full_size_filename: "assets/img/slide5.jpg", thumbnail_filename: "assets/img/slide5-thumbnail.jpg", title: "An image 5"},
	{full_size_filename: "assets/img/slide6.jpg", thumbnail_filename: "assets/img/slide6-thumbnail.jpg", title: "An image 6"},
]

// get the big elements and save for reuse.
var $thumbnailsDiv = document.querySelector(".thumbnails");// the thumbnails div

var $slideshowDiv = document.querySelector(".slideshow"); // the slideshow div

// loop through the slides array of objects above

for (var i = 0; i < slides.length; i++) {
	slides[i];

	// create an image element in a variable called $newThumbnail
	var $newThumbnail = document.createElement("img");
	// give it a src attribute, pulling the right filename from the slides array of objects 
	$newThumbnail.src = slides[i].thumbnail_filename; //$newThumbnail.setAttribute("src",slides[i])
	// insert it into the $thumbnailsDiv div
	$thumbnailsDiv.appendChild($newThumbnail);

}// end of loop

var showSlide = function (n){
	// create an image element in a variable called $newsSlide
	var $newSlide = document.createElement("img") 
	// give it a src attribute, pulling the FIRST filename from the slides array of objects 
	$newSlide.src = slides[n].full_size_filename;
	// insert it into the $slideshowDiv div
	$slideshowDiv.appendChild($newSlide);
}

showSlide(0);


/* On load
		loop slides array
		make thumnail elements
		create and show slide 0
	on interval
		figure out next slide #
		create and show slide #
		remove old slide

	//dry - didn't repeat yourself, concise, good
	//wet - repeat self, bad code	


	*/

var currentSlideNum = 0

var increaseSlideNuber = function(){
	currentSlideNum++;
	if (currentSlideNum == slides.length) {
		currentSlideNum = 0};
}

var removeOldSlides = function(){
	//$slideshowDiv.removeChild($slideshowDiv.children[0]);


	//DEFENSIVE CODING: we are setting up the code so that if something messes up if will strip it back down to one slide to get back on track,  
	//removing all the slides until there's only one slide left
	while($slideshowDiv.children.length > 1) {
		$slideshowDiv.removeChild($slideshowDiv.children[0]);
	}
}

var advanceSlideshow = function (){
	console.log("advanceSlideshow()")

	increaseSlideNuber();
	showSlide(currentSlideNum);
	removeOldSlides();
}


var advanceImage = setInterval(advanceSlideshow, 2500);



//////////////////////

//$-refers to DOM elements

/////////////////////

//1. Write a new function called killSlideshow. Make it turn off the interval, so that if you call this function, the slideshow stops advancing on it's own.
//
//2. Write another new function, called reverseSlideshow. This one will make the slideshow go backwards by one slide.
// Model it after advanceSlideshow. You'll also need to write a decreaseSlideNumber function.
//
//3. Make two <button> elements (in the HTML) that say "Previous" and "Next". Google to figure out the JS code to connect those buttons to the advanceSlideshow and reverseSlideshow functions


var killSlideshow = function (){
	clearInterval(advanceImage);
}

var decreaseSlideNuber = function(){
	currentSlideNum--;
	if (currentSlideNum == -1) {
		currentSlideNum = 5};
}

var reverseSlideshow = function (){
	console.log("reverseSlideshow()")
	decreaseSlideNuber();
	showSlide(currentSlideNum);
	removeOldSlides();
}

var reverseImage = setInterval(reverseSlideshow, 2500);

