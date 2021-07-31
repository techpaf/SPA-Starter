$(document).ready(function(){
	// DOM is ready...
	console.log("What will you build today ?");

	doRouting();
});

function doRouting(){	
	myRoma = new Roma();

	myRoma.addRoute('/', function(){
		console.log("Homepage");
		document.getElementById("currentPage").textContent = "Homepage";
	});

	myRoma.addRoute('/works', function(){
		console.log("Works");
		document.getElementById("currentPage").textContent = "Works";
	});

	myRoma.addRoute('/about', function(){
		console.log("About");
		document.getElementById("currentPage").textContent = "About";
	});

	myRoma.addRoute('/work/:id', function(params){
		console.log("Work " + params.id);
		document.getElementById("currentPage").textContent = "Work " + params.id;
	});

	myRoma.addRoute('/contact', function(){
		console.log("Contact");
		document.getElementById("currentPage").textContent = "Contact";
	});

	myRoma.init();
}