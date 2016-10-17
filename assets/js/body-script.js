

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
      series: [
        90, 180, 90
      ]
    };

    // Create a new line chart object where as first parameter we pass in a selector
    // that is resolving to our chart container element. The Second parameter
    // is the actual data object.
    new Chartist.Pie('.ct-chart', data, {
      donut: true,
      donutWidth: 100,
      startAngle: 0,
      total: 360,
      showLabel: false
    });
  }
});