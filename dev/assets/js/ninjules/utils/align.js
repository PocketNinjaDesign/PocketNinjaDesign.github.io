

Yo.add('utils.align', function() {

  var pivotX = function($this) {
    return {
      left: 0,
      middle: $this.width() / 2,
      right: $this.width()
    }
  };

  var pivotY = function($this) {
    return {
      top: 0,
      middle: $this.height() / 2,
      bottom: $this.height()
    }
  };

  var posX = function($el) {
    return {
      left: $el.offset().left,
      middle: $el.offset().left + ($el.width() / 2),
      right: $el.offset().left + $el.width()
    }
  };

  var posY = function($el) {
    return {
      top: $el.offset().top,
      middle: $el.offset().top + ($el.height() / 2),
      bottom: $el.offset().top + $el.height()
    }
  };


  var setX = function(options) {
    var opt = $.extend({
      pos: 'left',
      pivot: 'left',
      e: $('.null')
    }, options);

    $(this).css('left', posX(opt.e)[opt.pos] - pivotX($(this))[opt.pivot]);

    return this;
  };

  var setY = function(options) {
    var opt = $.extend({
      pos: 'top',
      pivot: 'top',
      e: $('.null')
    }, options);

    $(this).css('top', posY(opt.e)[opt.pos] - pivotY($(this))[opt.pivot]);

    return this;
  };

  var align = function(options) {
    var
      $this = $(this),
      opt = $.extend({
        type: 'get',
        x: 'left',
        y: 'top',
        xPivot: 'left',
        yPivot: 'top',
        e: $('.null')
      }, options),

      positions = {
        'left': posX(opt.e)[opt.x] - pivotX($this)[opt.xPivot],
        'top': posY(opt.e)[opt.y] - pivotY($this)[opt.yPivot]
      };

    if(opt.type === 'get') {
      return positions;
    }
    else if(opt.type === 'set') {
      $(this).css(positions);
    }

    return this;
  };

  $.fn.setXAlign = setX;
  $.fn.setYAlign = setY;
  $.fn.align = align;

  return {
    setX: setX,
    setY: setY,
    align: align
  };
});
