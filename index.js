document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector("#main-menu");
    let idsetter = document.querySelector("#main-menu1");
    let original = document.querySelector(".home-page").innerHTML;

    idsetter.dataset.id = "resume";
    idsetter = document.querySelector("#main-menu2");
    idsetter.dataset.id = "projects";
    idsetter = document.querySelector("#main-menu3");
    idsetter.dataset.id = "contact";

    document.querySelector("#home-button").addEventListener("click", function () {
        document.querySelector(".home-page").innerHTML = original;
        document.querySelector("#resume").style.display = "none";
        document.querySelector("#projects").style.display = "none";
        document.querySelector("#contact").style.display = "none";
    })

    buttons.addEventListener("click", function(e) {
        if (e.target && (e.target.nodeName == "LI" || e.target.nodeName == "A")) {
            document.querySelector(".home-page").innerHTML = '';
            
            if (e.target.dataset.id == "resume") {
                document.querySelector("#resume").style.display = "block";
                document.querySelector("#projects").style.display = "none";
                document.querySelector("#contact").style.display = "none";
            } else if (e.target.dataset.id == "projects") {
                document.querySelector("#resume").style.display = "none";
                document.querySelector("#projects").style.display = "block";
                document.querySelector("#contact").style.display = "none";
            } else if (e.target.dataset.id =="contact") {
                document.querySelector("#resume").style.display = "none";
                document.querySelector("#projects").style.display = "none";
                document.querySelector("#contact").style.display = "block";
            }
        }
    })

    $(".skills li .rating").each(function(index,e) { 

		// Vars
		var 
			$ratNum = 7,
			$rat = $(e).attr("data-rat"),
			$point = "<span></span>";

		// Append points
		while($ratNum > 0){
		    $(e).append($point);
		    $ratNum--;
		}

		$(e).find("span").each(function(index,e) { 
			if(index >= $rat) return false;
			// Append Disabled Rats
			$(e).animate({
			    opacity: 1
			});
		});

    });

})

