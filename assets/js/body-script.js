

// Directive Component

Yo.add('yoTest', ['config.breakpoints'], function(configBreakPoints) {

  var yoTest;

  if ($('#yoTest').length > 0) {
    yoTest = $('#yoTest');
    yoTest.find('h2').html('Yo and jQuery working');
    yoTest.find('p.breakpoint').html('Also the configuration shared variables should be working as well now.  The size for mobile landscape is ' + configBreakPoints.mobileLandscape);
    yoTest.find('p.colour').html('The colours are also working because this box actually uses colours pulled from the shared config.');
    yoTest.show();
  }

  return {};
});


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
      top: $el.position().top,
      middle: $el.position().top + ($el.height() / 2),
      bottom: $el.position().top + $el.height()
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


// Directive Page


Yo.add('page.home', ['utils.align'], function(utilsAlign) {
  if($('#pageHome').length > 0) {
    var data = {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        [5, 2, 4, 2, 0]
      ]
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    new Chartist.Line('.ct-chart', data);


    $('.egg').align({
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    });

    /*$('.egg').animate($('.egg').align({
      e: $('.turnip'),
      x: 'right',
      y: 'bottom',
      xPivot: 'middle',
      yPivot: 'middle'
    }), 500);*/
  }
});