(function ( $ ) { 
	$.fn.dataURL = function() {
	    
	    // variables
	    var el = $(this);
	    var aTag = el.find('a');
	    var aHref;
	    var aTarget;
	    
	    // get & set attributes
	    aTag.each(function() {
	        var aHref = $(this).attr('href');
	        $(this).parent().attr('data-href',this);
	        
	        aTarget = $(this).attr('target');
	        $(this).parent().attr('data-target',aTarget);
	    });
	    
	    // imitation - default attributes' behavior on "data-" attributes
	    $(el).delegate('[data-href]','click', function() {
	        var loc = window.location.href;
	        loc = $(this).attr("data-href");
	        aTarget = $(this).attr('data-target');
	 
	            if(aTarget == "_blank"){
	            window.open(loc);
	        } else {
	            window.location = loc;
	        }
	        
	        return false;
	    });     
	    
	    //removing attributes from selector itself
	    el.removeAttr('data-href');
	    el.removeAttr('data-target');
	    
	    // css
	    $('[data-href]').css('cursor','pointer');
	};
	$(".posts").dataURL();
}( jQuery ));