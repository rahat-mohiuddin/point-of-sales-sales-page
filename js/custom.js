        
//Script for Data Table=========================================
       
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
    });

