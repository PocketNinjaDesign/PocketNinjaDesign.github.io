Yo.add('test.test1', function() {
  var
    Test1 = function($element, myOptions) {
      var $this = $element || $(this);
      myOptions = $.extend({}, {
        widgetName: 'test1'
      }, myOptions);

      $this.addClass(myOptions.className);
    };

  $.fn.Test1 = function(data) {
    Test1($(this), $.extend({}, data));
    return this;
  };

  $.fn.Test1_basic = function(data) {
    Test1($(this), $.extend({}, $(this).data('test1'), data));
    return this;
  };

  return {
    Test1: Test1
  };
});