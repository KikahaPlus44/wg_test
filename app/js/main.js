
$(document).ready(function(){
	// TABS
	$(".tab_content").hide();
	$(".tab_content:first").show();

	/* if in tab mode */
	$("ul.tabs li").click(function() {
		
	    $(".tab_content").hide();
	    var activeTab = $(this).attr("rel"); 
	    $("#"+activeTab).fadeIn();		
		
	    $("ul.tabs li").removeClass("active");
	    $(this).addClass("active");

	    $(".tab_drawer_heading").removeClass("d_active");
	    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
	});
	// RESPONCIVE LIST 
	$('.js_responsive-list').on('click', 'li', function(e){

		if ($(window).width() < 801) {
			$('.js_responsive-list').toggleClass('open');
		}
		
		var active = $(this);
		$('.js_responsive-list li').removeClass('active');
	    active.addClass('active');  
		e.preventDefault();
	});

	// CHECKBOXES 
	// add 100 options
	for (var i = 1; i < 101; i++) {
	    $('.js-checkboxes').append('<li class="checkbox"><input type="checkbox" id="checkbox-' + i + '" name="checkbox"><label for="checkbox-' + i +'"> Опция'+ ' ' + i + '</label></li>');	
	}
	// checkbox controller
	var checkedboxes = [],
		toStorage = [];
	$('.js-checkboxes').on('change', 'input', function(){
		// if user check
		if ($(this)[0].checked) {
			if (checkedboxes.length < 3) {
			checkedboxes.push($(this));
			} else {
				$(checkedboxes[0]).prop('checked', false);
				checkedboxes.splice(0 , 1);
				checkedboxes.push($(this));
			}
		}
		// if user uncheck
		else {			
			for (var i = 0; i < checkedboxes.length; i++) {
				if (this == checkedboxes[i][0]){
					checkedboxes.splice(i , 1);
				}
			}
		}
		// put in local storage
		if (typeof(Storage) !== "undefined") {
			// create array with id checked checkboxes
		    for (var i = checkedboxes.length - 1; i >= 0; i--) {
		    	toStorage[i] = (checkedboxes[i].attr('id'));
			}
			// crop array
			toStorage.length = checkedboxes.length;
			// clear localstorage slot
		    localStorage.removeItem("options");
		    // save data to localstorage
			localStorage.setItem("options", JSON.stringify(toStorage));
		} else {
		    aler("It would be better to update your browser")
		}
	})
});		


	


