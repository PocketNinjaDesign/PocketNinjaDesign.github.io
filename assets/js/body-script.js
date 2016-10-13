

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

// Directive Page


Yo.add('page.home', function() {
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
  }
});