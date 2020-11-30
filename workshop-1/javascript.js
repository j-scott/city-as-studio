


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



 