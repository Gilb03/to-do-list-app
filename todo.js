//Check off specific to-do's by clickling
$("ul").on("click" , "li", function(){
$(this).toggleClass("completed");

});
 //the link for my local file: assets/js/lib/jquery-3.1.2.min.js

 //click on x to delete todo
 $("ul").on("click", "span", function(event){
 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	});
 	event.stopPropagation();
 });
 
 $("input[type='text']").keypress(function(event){
if(event.which === 13){
	//grabbing new to do text from input
	var todoText = $(this).val();
	$(this).val("");
	// create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
 }
});

