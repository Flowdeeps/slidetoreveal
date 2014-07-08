$('body').ready(function(){

  var where = $('#where');
  var startx = 0;

  $('.banda').each(function(){

    var banda = $(this);
    var bandaX = this.offsetLeft;
    var before = $(this).find('.before');
    var after = $(this).find('.after');
    var afterWidth = 0;

    banda.bind('touchstart', function(event){
      var e = event.originalEvent;
      var touchobj = e.targetTouches[0].pageX; // reference first touch point (ie: first finger)
      $('#where').text(touchobj.clientX);
      startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
      afterWidth = (touchobj - bandaX) + 'px';
      after.width(afterWidth);
      after.css({
        'border-right': 'solid 3px red'
      });
      e.preventDefault()
    });

    banda.bind('touchmove', function(event){
      var e = event.originalEvent;
      var touchobj = e.changedTouches[0]; // reference first touch point for this event
      $('#where').text(touchobj.clientX);
      after.width((touchobj.clientX - bandaX) + 'px');
      e.preventDefault();
    });

    banda.bind('touchend', function(event){
      var e = event.originalEvent;
      var touchobj = e.changedTouches[0]; // reference first touch point for this event
      $('#where').text(touchobj.clientX);
      afterWidth = 0;
      after.width(0);
      after.css({
        'border': 'none'
      });
      $('#where').text('0');
      e.preventDefault();
    });

    banda.bind('mouseenter', function(e){
      banda.bind('mousemove', function(e){
        $('#where').text(e.pageX);
        afterWidth = (e.pageX - bandaX) + 'px';
        after.width(afterWidth);
        after.css({
          'border-right': 'solid 3px red'
        });
      });
    });

    banda.bind('mouseleave', function(e){
      afterWidth = 0;
      after.width(0);
      after.css({
        'border': 'none'
      });
      $('#where').text('0');
    });

  });

});