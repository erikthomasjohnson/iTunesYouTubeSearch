
$(document).ready(function() {

	$("#search-keyword").keypress(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        $("#search-button").click();
        $(this).blur();
    }
	});

	$('.popup').css({ opacity: 0 });

	$('.form-container').submit(function() {
		if(!$('.form-container .search-field').val() || $('.form-container .search-field').val() == "Search iTunes...") {
			$('.popup').css({ opacity: 0 });
			$('.popup').animate(
				{ opacity: 1 },
				{
					duration: 'slow',
					easing: 'easeOutBounce'
				});
			return false;
		}
	});

	$('.form-container .search-field').focus(function() {
		if($(this).val() == "Search iTunes...") {
			this.value = "";
		}
	});

	$('.form-container .search-field').keydown(function() {
		$('.popup').css({ opacity: 0 });
	});

});

