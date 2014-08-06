$('.btn-search').click(function(){
	if($('.nav-search').hasClass('form-hide')) {
       $('.nav-search').fadeTo(100, 1);
       console.log('has class form-hide');
    }
    else{        $('.nav-search').fadeTo(100, 0);

           console.log('no form-hide');
}

	$('.nav-search').toggleClass('form-hide');
});

$('#mobileDropdown').on('show.bs.dropdown', function() {
	$('#mobileNavIcon').removeClass('icon-caret-down').addClass('icon-caret-up');
}).on('hide.bs.dropdown', function() {
	$('#mobileNavIcon').removeClass('icon-caret-up').addClass('icon-caret-down');
});

$('.flag').click(function(){
	$(this).toggleClass('opaque');
});

$('input[type="checkbox"]').change(function() {
	if ($(this).is(':checked')) {
		$(this).parent('label').addClass('input_checked');
	} else {
		$(this).parent('label').removeClass('input_checked');
	}
});
$('input[type="radio"]').change(function() {
	var name = $(this).attr('name');
	$('input[name="' + name + '"]').parent('label').removeClass('input_checked');
	if ($(this).is(':checked')) {
		$(this).parent('label').addClass('input_checked');
	}
});
