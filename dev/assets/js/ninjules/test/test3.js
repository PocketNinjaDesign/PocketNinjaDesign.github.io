Yo.add('test.test3', function() {
  var
    Test3 = function($element, myOptions) {
      var $this = $element || $(this);
      myOptions = $.extend({}, {
        widgetName: 'test3'
      }, myOptions);

      $this.addClass(myOptions.className);
    };

  $.fn.Test3 = function(data) {
    Test3($(this), $.extend({}, data));
    return this;
  };

  $.fn.Test3_basic = function(data) {
    Test3($(this), $.extend({}, $(this).data('test3'), data));
    return this;
  };

  return {
    Test3: Test3
  };
});