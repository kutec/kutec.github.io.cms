/* Author: Kushal Jayswal

*/
(function($){
	var size = $(window).width();
	
	mobileMenu();
	
	
	// collapsable menus
	function mobileMenu(){
		var node				= $("#navigation"),
			UL					= node.find("ul"),
			
			menu 				= $(".topmenu"),
			socials				= $(".socials"),
			
			menuActivated		= menu.hasClass("active"),
			socialsActivated	= socials.hasClass("active"),
			
			triggerNode			= $(".menu__trigger"),
			triggerEl			= triggerNode.find("span");
		
		
		
		triggerNode.on('click', '.mainmenu', function(){
			triggerEl.removeClass("active");
			UL.removeClass("active");

			socials.slideUp();
			menu.slideToggle();
			menu.toggleClass('active');
			$(this).toggleClass('active');
		});

		triggerNode.on('click','.socialmenu', function(){
			triggerEl.removeClass("active");
			UL.removeClass("active");
			
			menu.slideUp();
			socials.slideToggle(); 
			socials.toggleClass('active');
			$(this).toggleClass('active');
		});
	};
	
    $(".button-collapse").sideNav();
})(jQuery);

window.onload = function(){
	
};
