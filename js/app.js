$(document).ready(function(){
	/* clean the text box */
	$('.text-box').val('');

	/* defining check and delete button variables */
	var actionButtons = '<div class = btn_delete></div>' + 
						          '<div class = btn_check></div>';

	/* gets the variable and adds it to the list when the add button is clicked, and hide the action buttons */
	$('.btn-add').click(function(){
    	var newItem = $('.text-box').val();

      /* if user don't type */
      if(newItem == ""){
        alert('You need to type something.');
      }else{
        $('ul').append('<li>' + newItem + actionButtons + '</li>');
        $('li').last().hide().slideDown('slow');
         $('.text-box').val('');
      }
  	});


  	/* when pressed enter */
  	$(document).keydown(function(event){
  		if(event.which===13){
  			var newItem = $('.text-box').val();

        /* if user don't type */
      if(newItem == ""){
        alert('You need to type something.');
      }else{
    		  $('ul').append('<li>' + newItem + actionButtons + '</li>');
          $('li').last().hide().slideDown('slow');
    		  $('.text-box').val('');
        }
  		}
  	});

  	/* delete the list item when the delete button is clicked */
  	$('ul').on('click', '.btn_delete', function(){
      $(this).parent().slideUp('slow', function(){
        $(this).remove();
      });
  	});

  	/* mark a item as checked */
  	$('ul').on('click', '.btn_check', function(){
  		$(this).parent().addClass('mark');
  	});
});