
//widget-pass-through

// Description
//Just testing the speed performance of widgets on a page by full page checking of data attributes or directly by checking a particular container ID


var Yo=function(){"use strict";var e,n="modules",t=0,r=0,o=function(t){e=t.namespace||Yo,Yo.loadedState={},t.scriptRoot&&(n=t.scriptRoot),e[n]=e[n]||{},e.debugMode=t.debugMode||!1,e.debugScripts=t.debugScripts||void 0,e.debugMode&&(Yo.loadOrder=[])},d=function(){return c("Array",e.debugScripts)&&e.debugScripts.length<1},i=function(n,t){e.debugMode&&(void 0===e.debugScripts||d()?t(n):d()||e.debugScripts.forEach(function(e){n.search(e)>-1&&t(n)}))},u=function(e){i(e,function(){console.log(e)})},c=function(e,n){return"[object "+e+"]"===Object.prototype.toString.call(n)},a=function(e,n){if(e.length===n.length){var t,r;for(t=0;t<e.length;t++)if(r=e[t],!c(n[t],r))return u("Error with value comparison: "+r+", EXPECTED: "+n[t]),!1;return!0}return!1},l=function(e){return e.slice(0)},f=function(){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])arguments[e].hasOwnProperty(n)&&(arguments[0][n]=arguments[e][n]);return arguments[0]},p=function(e,n,t){var r=e.split("."),o=n;t=t||!1;for(var d=0;d<r.length;d++){if(!o[r[d]])return!1;if(t&&d===r.length-1)return o;o=o[r[d]]}return o},s=function(e,n,t){var r=e.split("."),o=n;if(t=t||!1,r.length<2)return o[e]||(o[e]={}),t?n:o[e];for(var d=0;d<r.length;d++){if(o[r[d]]||(o[r[d]]={}),t&&d===r.length-1)return o;o=o[r[d]]}return o},g=function(){var o,d,c=[],g=!0,h=function(e){return p(e,Yo.loadedState)},v=function(e,n){f(s(e,Yo.loadedState),n)},S=function(o){var d=s(o,e[n],!0),c=o.split(".");c=c[c.length-1],h(o).loaded&&(d[c]=h(o).loadedFunc(),r+=1,u("YO.LOADED: "+o),i(o,function(){Yo.loadOrder.push(o)}),u("scripts ADDED: "+t+", LOADED: "+r),h(o).runAfterActivation())},b=function(t){return s(t,e[n])},A=function(e,n){n=n||o,v(n,f({loaded:!1,loadedFunc:function(){},runAfterActivation:function(){},dependedBy:[],dependencies:[]},s(n,Yo.loadedState)||{},e))},D=function(){return A({loaded:!0,loadedFunc:function(){u(o+" called and already loaded")}}),d.apply(null,c.map(function(e){return b(e)}))},Y=function(){for(var e,n=h(o).dependedBy,t=0;t<n.length;t++){e=n[t];for(var r=0;r<h(e).dependencies.length;r++)if(h(e).dependencies[r]===o){h(e).dependencies.splice(r,1),n.splice(t,1),t--,u("DEPENDENCY: "+e+" dependent on "+o);break}h(e).dependencies.length<1&&(h(e).loaded=!0,S(e))}},y=function(){var e,n=!0,t=h(o).dependencies;u("SCRIPTS: "+o+" dependent on ["+t.toString()+"]");for(var r=0;r<t.length;r++)e=t[r],p(e,Yo.loadedState)||A({},e),h(e).loaded?(t.splice(r,1),r--):(h(e).dependedBy.push(o),n=!1);n&&(h(o).loaded=!0)};if(a(arguments,["String","Array","Function"]))o=arguments[0].toLowerCase(),c=arguments[1],d=arguments[2],g=c.length<1;else{if(!a(arguments,["String","Function"]))return u("incorrect params added",arguments),!1;o=arguments[0].toLowerCase(),d=arguments[1]}u("YO.ADD: "+o),t+=1,g?(A({loaded:!0,loadedFunc:d}),S(o),Y()):(A({loadedFunc:D,dependencies:l(c),runAfterActivation:function(){Y()}}),y(),S(o))};return{init:o,add:g,isTypeOf:c,argumentChecker:a,arrayClone:l,extend:f}}();



Yo.init({
  scriptRoot: 'ninjules'
});


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

/*
Setup 2 widgets to run through a page and find elements on the page.

1. Run widgets on the page to find 5 elements for widget1 and then 1 element for widget 2
2. Have script point widgets at direct element containers to run the widget

*/




// full pass through

$('[data-test1]').Test1_basic({
  className: 'NEW-WIDGET-1'
});

$('[data-test2]').Test2_basic({
  className: 'NEW-WIDGET-2'
});

$('[data-test3]').Test3_basic({
  className: 'NEW-WIDGET-3'
});



// contained pass through

if($('#pageContainer').length > 0) {
  $('#pageContainer').find('[data-test1]').Test1_basic({
    className: 'NEW-WIDGET-1'
  });

  $('#pageContainer').find('[data-test2]').Test2_basic({
    className: 'NEW-WIDGET-2'
  });
}


// direct pass through

if($('#pageContainer').length > 0) {
  $('#pageContainer').find('[data-test1]').Test1_basic({
    className: 'NEW-WIDGET-1'
  });

  $('#widget2').Test2_basic({
    className: 'NEW-WIDGET-2'
  });
}


// Once pass through

nodeCycler(document.querySelector('body'));


// Once pass through by 1 attr for ALL

$("[pn-widget]").each(function(index, el) {
  $.map( JSON.parse($(el).attr('pn-widget')), function( value, key ) {
    runjQueryWidget(el, key, value);
  });
});


















