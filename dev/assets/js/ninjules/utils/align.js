Yo.add('utils.Align', function() {

  var getElementOffset = function($el, direction, inner) {
    return $el.offset()[direction] - ((inner)? $el.offset()[direction] : 0);
  };

  var pivotX = function($this) {
    return {
      left: 0,
      middle: $this.width() / 2,
      right: $this.width()
    };
  };

  var pivotY = function($this) {
    return {
      top: 0,
      middle: $this.height() / 2,
      bottom: $this.height()
    };
  };

  var posX = function($el, inner) {
    return {
      left: getElementOffset($el, 'left', inner),
      middle: getElementOffset($el, 'left', inner) + ($el.width() / 2),
      right: getElementOffset($el, 'left', inner) + $el.width()
    };
  };

  var posY = function($el, inner) {
    return {
      top: getElementOffset($el, 'top', inner),
      middle: getElementOffset($el, 'top', inner) + ($el.height() / 2),
      bottom: getElementOffset($el, 'top', inner) + $el.height()
    };
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
        inner: false,
        e: $('.null')
      }, options),

      positions = {
        'left': posX(opt.e, opt.inner)[opt.x] - pivotX($this)[opt.xPivot],
        'top': posY(opt.e, opt.inner)[opt.y] - pivotY($this)[opt.yPivot]
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
