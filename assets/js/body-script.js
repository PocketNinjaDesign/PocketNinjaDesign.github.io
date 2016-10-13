


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