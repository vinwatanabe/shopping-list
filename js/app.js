$(document).ready(function(){
	/* clean the text box */
	$('.text-box').val('');

	/* defining check and delete button variables */
	var actionButtons = '<div class = btn_delete></div>' + 
						'<div class = btn_check></div>';

	/* gets the variable and adds it to the list when the add button is clicked */
	$('.btn-add').click(function(){
    	var newItem = $('.text-box').val();
    	$('ul').append('<li>' + newItem + actionButtons + '</li>');
    	$('.text-box').val('');
  	});

  	/* when pressed enter */
  	$(document).keydown(function(event){
  		if(event.which===13){
  			var newItem = $('.text-box').val();
    		$('ul').append('<li>' + newItem + actionButtons + '</li>');
    		$('.text-box').val('');
  		}
  	});

  	/* delete the list item when the delete button is clickes */
  	$('ul').on('click', '.btn_delete', function(){
  		$(this).parent().remove();
  	});

  	/* mark a item as checked */
  	$('ul').on('click', '.btn_check', function(){
  		$(this).parent().addClass('mark');
  	});
});