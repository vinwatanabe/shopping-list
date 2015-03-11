$(document).ready(function(){
	$('.btn-add').click(function(){
    	var newItem = $('.text-box').val();
    	$('ul').append('<li>' + newItem + '</li>');
    	$('.text-box').val('');
  	});
});