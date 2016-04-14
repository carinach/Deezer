if (typeof(Storage) !== "undefined") {
	// Store
	var all_Id;
	var coeur;
	var writing = $("#page-likes");

	// Retrieve

	$("#wanted").on("click", function(){
		coeur += id_music + ",";
		localStorage.setItem("listMusic", coeur);
		afficheNext(id_music);
	});


	function afficheNext(id){
		$("#page-likes").append("<li><span class='artist'>" + music[id].artist + "</span><span class='song'>" + music[id].title + "</span><span class='closed'>X</span></li>");
	}

	function afficheCoupsCoeur(){
		
		var text;
		var id;
		for(var i = 0; i < coeur.length/2; i++) {
			id = parseInt(all_Id[i])
			$("#page-likes").append("<li><span class='artist'>" + music[id].artist + "</span><span class='song'>" + music[id].title + "</span><span class='closed'>X</span></li>");
			console.log(i);
		}  
	}

	if(localStorage.getItem("listMusic") <= 0){
		localStorage.setItem("listMusic", "");
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split("");
	} else {
		coeur = localStorage.getItem("listMusic");
		all_Id = coeur.split(",");
		afficheCoupsCoeur();
	}

} else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}