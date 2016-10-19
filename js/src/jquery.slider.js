// jQuery slider plugin 
(function($) {

		var defaults = {
    	pixelsOffset: 275,
    	speed: 300	
    };	

    $.fn.slideImage = function(options) {

    var settings =$.extend(defaults, options);	
    
    var $elementsList = $(this);
    var $prev = $('.carousel-arrow-left');
    var $next = $('.carousel-arrow-right');
    var currentLeftValue = 0;
    var elementsCount = $elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * settings.pixelsOffset);
    var maximumOffset = 0;	

    $prev.on('click', (function() {    
    		    
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };
    }));

    $next.on('click', (function() { 
    		       
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= settings.pixelsOffset;
            $elementsList.animate({ left : currentLeftValue + "px"}, settings.speed);
        };       
    }));

    return this;
  };

})(jQuery);

