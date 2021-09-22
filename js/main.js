$(document).ready(function(){
	// DOM is ready...
	console.log("What will you build today ?");
	bindEvents();
	doRouting();
});

function doRouting(){	
	myRoma = new Roma();

	myRoma.addRoute('/', function(){
		console.log("Homepage");
		displayPanel("homepage");
	});

	myRoma.addRoute('/about', function(){
		console.log("About");
		displayPanel("about");
	});

	myRoma.addRoute('/contact', function(){
		console.log("Contact");
		displayPanel("contact");
	});

	myRoma.init();
}

function bindEvents(){
	$('a').each(function(){
		$(this).click(function(e){
			if($(this).attr("href")[0] == "/"){
				myRoma.goTo($(this).attr('href'));
				e.preventDefault();
			}
		});
	});
}

function displayPanel(panelClass){
	$('.panel').each(function(){
		if($(this).hasClass(panelClass)){
			$(this).show();
		}
		else{
			$(this).hide();
		}
	});
}