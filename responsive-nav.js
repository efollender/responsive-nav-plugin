(function($){
  $.fn.responsiveNav = function() {
    this.each(function(){
      if($(this).is('.nav')){
        $theNav = $(this);
        if($('body').scrollTop() > 0) {
          $theNav.css('background', 'yellow');
        }
      }
    })
  }
}(jQuery));