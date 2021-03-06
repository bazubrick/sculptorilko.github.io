(function($) {
		
	$.fn.SuperBox = function(options) {
		
		var superbox      = $('<div class="superbox-show"></div>');
		var superboximg   = $('<img src="" class="superbox-current-img">');
		var superboxclose = $('<div class="superbox-close"></div>');
		
		superbox.append(superboximg).append(superboxclose);
		
		return this.each(function() {
			
			$('.superbox-list').click(function() {
		
				var currentimg = $(this).find('.superbox-img');
				var imgData = currentimg.data('img');
				superboximg.attr('src', imgData);
				
				if($('.superbox-current-img').css('opacity') == 0) {
					$('.superbox-current-img').animate({opacity: 1});
				}
				
				if ($(this).next().hasClass('superbox-show')) {
					superbox.toggle();
				} else {
					superbox.insertAfter(this).css('display', 'block');
				}
				
			$('html, body').animate({
					scrollTop:superbox.position().top - currentimg.width() + 200
				}, 'medium');
			console.log(superbox.position().top - currentimg.width());
				
			});

						
			$('.superbox').on('click', '.superbox-close', function() {
				$('.superbox-current-img').animate({opacity: 0}, 200, function() {
					$('.superbox-show').slideUp();
				});
			});
			
		});
	};
})(jQuery);

Template.gallery.onRendered(function () {
	$('.superbox').SuperBox();
	Meteor.subscribe('gallery');
	$('ul.tabs').tabs();
	$('.modal-trigger').leanModal({
      dismissible: true, 
      opacity: .5, 
      in_duration: 300,
      out_duration: 200 

    }
  );
});

Template.gallery.helpers({
  galleryIlko: function() {
    return Gallery.find();
  }
});
