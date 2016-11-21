Yo.add('test.test2', function() {
  var
    Test2 = function($element, myOptions) {
      var $this = $element || $(this);
      myOptions = $.extend({}, {
        widgetName: 'test2'
      }, myOptions);

      $this.addClass(myOptions.className);
    };

  $.fn.Test2 = function(data) {
    Test2($(this), $.extend({}, data));
    return this;
  };

  $.fn.Test2_basic = function(data) {
    Test2($(this), $.extend({}, $(this).data('test2'), data));
    return this;
  };

  return {
    Test2: Test2
  };
});