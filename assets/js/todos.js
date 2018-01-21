$(document).ready(function(){

	$("input").hide();
//making li strike through and greyed out if todo is done
	$("ul").on("click","li",function(){

		// here we have used ul as main grabber so that it can grab all the ul elements that are to be added afterwards and check off works on new items also

	$(this).toggleClass("completed");

	}); // end of toggle 


//Remove a particular li on clicking span element
	$("ul").on("click","span",function()

		//similarly here we have used ul along with span so that the removal works for new added items also
	{
		$(this).parent('li').fadeOut(500,function(){

			$(this).remove();
		});
	});//end of span

	$("input").keydown(function(event){

		if(event.which==13)
		{	
			
		//grabbing new text from input
			var todoText = $(this).val();
			$(this).val("");//to remove the entered text from input box;
			//create new li and add to ul
			$("ul").append('<li><span><i class="fa fa-trash"></i></span>'+todoText+'</li>');
		}
			
	});//end of keydown

$(".fa-plus").on("click",function(){
			$("input").fadeToggle(500);
		});
});//end of ready function