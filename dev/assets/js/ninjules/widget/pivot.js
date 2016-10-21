
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