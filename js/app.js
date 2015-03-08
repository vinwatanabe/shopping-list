$(document).ready(function(){
	var newItem = $(".text-box").val();

	$(".add-item").on("click", ".btn-add", function(event){
		$(".list").append("<li>" + newItem + "</li>");
	});
});