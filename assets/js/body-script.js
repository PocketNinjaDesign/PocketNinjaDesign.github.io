

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

// Utils


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

// Widgets

Yo.add('widget.pivot', function() {

  var Pivot = function(element, options, callBack) {
    var alignments = {
      e: $('.pivot'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    };

    var $this = $(element);

    var init = function() {
      $.extend(alignments, options);

      $this.find('[data-pivot-top]').on('click', function() {
        console.log('clicked pivot TOP');
        alignments = $.extend(alignments, {
          yPivot: 'top'
        });
        callBack();
      });

      $this.find('[data-pivot-y-middle]').on('click', function() {
        console.log('clicked pivot MIDDE Y');
        alignments = $.extend(alignments, {
          yPivot: 'middle'
        });
        callBack();
      });

      $this.find('[data-pivot-bottom]').on('click', function() {
        console.log('clicked pivot BOTTOM');
        alignments = $.extend(alignments, {
          yPivot: 'bottom'
        });
        callBack();
      });

      $this.find('[data-pivot-left]').on('click', function() {
        console.log('clicked pivot LEFT');
        alignments = $.extend(alignments, {
          xPivot: 'left'
        });
        callBack();
      });

      $this.find('[data-pivot-x-middle]').on('click', function() {
        console.log('clicked pivot MIDDLE Y');
        alignments = $.extend(alignments, {
          xPivot: 'middle'
        });
        callBack();
      });

      $this.find('[data-pivot-right]').on('click', function() {
        console.log('clicked pivot RIGHT');
        alignments = $.extend(alignments, {
          xPivot: 'right'
        });
        callBack();
      });

    };

    var get = function() {
      return alignments;
    };

    init();

    return {
      init: init,
      get: get
    };
  };

  var create = function($pivot, options, callBack) {
    return new Pivot($pivot, options, callBack);
  };

  return {
    create: create
  }
});


// Directive Page


Yo.add('page.home', ['utils.align', 'widget.pivot'], function(utilsAlign, pivot) {
  if($('#pageHome').length > 0) {
    var data = {
      series: [
        90, 180, 90
      ]
    };

    new Chartist.Pie('.ct-chart', data, {
      donut: true,
      donutWidth: 100,
      startAngle: 0,
      total: 360,
      showLabel: false
    });

    var pivotBlock = pivot.create($('#homePivot'), {
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    }, function() {
      $('.egg').align(pivotBlock.get());
    });


    /*
    $('.egg').align({
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    });
    */
  }
});