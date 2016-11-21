
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

(function() {



  var capitalize = function(string) {

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  };



  runjQueryWidget = function(element, name, data) {

    name = capitalize(name);

    if($(element)[name]) {

      $(element)[name](data || {});

    }

  };



  var widgetChecker = function(element) {

    if(element.attributes.length > 0) {

      for(var i = 0; i < element.attributes.length; i++) {

        if(element.attributes[i].name.charAt(0) === 'p') {

          var n = element.attributes[i].name.indexOf('pn-');

          if(n === 0) {

            runjQueryWidget(element, element.attributes[i].name.replace('pn-', ''));

          }

        }

      }

    }

  };



  nodeCycler = function(element) {

    var length = element.children.length;

    widgetChecker(element);



    if(length > 0) {

      for(var i = 0; i < length; i++) {

        nodeCycler(element.children[i]);

      }

    }

  };

}());

//nodeCycler(document.querySelector('body'));
/*
$("[pn-widget]").each(function(index, el) {
  $.map( JSON.parse($(el).attr('pn-widget')), function( value, key ) {
    runjQueryWidget(el, key, value);
  });
});
  */