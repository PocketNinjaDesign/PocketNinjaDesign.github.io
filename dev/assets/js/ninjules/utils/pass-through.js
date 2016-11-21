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
        if(element.attributes[i].name.charAt(0) === 'd') {
          var n = element.attributes[i].name.indexOf('data-');
          if(n === 0) {
            runjQueryWidget(element, element.attributes[i].name.replace('data-', ''));
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