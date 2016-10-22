
Yo.add('widget.pivot', function() {

  var Pivot = function(element, options, callBack) {
    var pivots = {
      ytop: 'top',
      ymiddle: 'y-middle',
      ybottom: 'bottom',
      xleft: 'left',
      xmiddle: 'x-middle',
      xright: 'right'
    };

    var alignments = {
      e: $('.pivot'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    };

    var $this = $(element);

    var init = function() {

      var removeActiveX = function() {
        $this.find('[data-pivot-left]').removeClass('active');
        $this.find('[data-pivot-x-middle]').removeClass('active');
        $this.find('[data-pivot-right]').removeClass('active');
      };

      var removeActiveY = function() {
        $this.find('[data-pivot-top]').removeClass('active');
        $this.find('[data-pivot-y-middle]').removeClass('active');
        $this.find('[data-pivot-bottom]').removeClass('active');
      };

      $.extend(alignments, options);

      // Activate initial pivots
      $this.find('[data-pivot-' + pivots['x' + alignments.x] + ']').addClass('active');
      $this.find('[data-pivot-' + pivots['y' + alignments.y] + ']').addClass('active');

      $this.find('[data-pivot-top]').on('click', function() {
        console.log('clicked pivot TOP');
        removeActiveY();
        $(this).addClass('active');
        alignments = $.extend(alignments, {
          yPivot: 'top'
        });
        callBack();
      });

      $this.find('[data-pivot-y-middle]').on('click', function() {
        console.log('clicked pivot MIDDLE Y');
        removeActiveY();
        $(this).addClass('active');
        alignments = $.extend(alignments, {
          yPivot: 'middle'
        });
        callBack();
      });

      $this.find('[data-pivot-bottom]').on('click', function() {
        console.log('clicked pivot BOTTOM');
        removeActiveY();
        $(this).addClass('active');
        alignments = $.extend(alignments, {
          yPivot: 'bottom'
        });
        callBack();
      });

      $this.find('[data-pivot-left]').on('click', function() {
        console.log('clicked pivot LEFT');
        removeActiveX();
        $(this).addClass('active');
        alignments = $.extend(alignments, {
          xPivot: 'left'
        });
        callBack();
      });

      $this.find('[data-pivot-x-middle]').on('click', function() {
        console.log('clicked pivot MIDDLE Y');
        removeActiveX();
        $(this).addClass('active');
        alignments = $.extend(alignments, {
          xPivot: 'middle'
        });
        callBack();
      });

      $this.find('[data-pivot-right]').on('click', function() {
        console.log('clicked pivot RIGHT');
        removeActiveX();
        $(this).addClass('active');
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