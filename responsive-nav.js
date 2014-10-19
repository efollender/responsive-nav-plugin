(function($){
  $.fn.responsiveNav = function(args) {
    this.each(function(){
      if($(this).is('.nav')){
        $theNav = $(this);
        if($('body').scrollTop() > 0) {
          createCSSSelector('.rn-options',
            'background:' + args.bgColor ';'+
            'transition: all'  + args.speed + ' ease-in-out;'+
            'transform: scale(' + args.shrink +')'
          );
        }
      }
    })
  }
}(jQuery));