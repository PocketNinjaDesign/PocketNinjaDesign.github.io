

Yo.add('page.home', ['utils.align'], function(utilsAlign) {
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


    $('.egg').align({
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    });

    /*$('.egg').animate($('.egg').align({
      e: $('.turnip'),
      x: 'right',
      y: 'bottom',
      xPivot: 'middle',
      yPivot: 'middle'
    }), 500);*/
  }
});