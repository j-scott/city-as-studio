


	function pasuser(form) { 
		// var userName = "name"; 
		var loginPassword = "password"; 
		//if (form.id.value== userName) 
		{ 
			if (form.pass.value== loginPassword ) { 
				$('.hiddenStuff').toggleClass( "hidden", 1000, "easeInSine" );
				$('form.well').addClass('hidden');
				$('body').css( "background", "#fbfbfb" );
		 	} 
		else { alert("Wrong Password"); } } 
		//else { alert("Wrong Username"); } 
	} 



   	 var myIndex = 0;
  	carousel();
  	function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 4 seconds
  	}