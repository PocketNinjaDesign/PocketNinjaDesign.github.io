

Yo.add('page.home', ['utils.align', 'widget.pivot'], function(utilsAlign, pivot) {
  if($('#pageHome').length > 0) {
    var data = {
      series: [
        90, 180, 90
      ]
    };

    new Chartist.Pie('.ct-chart', data, {
      donut: true,
      donutWidth: 100,
      startAngle: 0,
      total: 360,
      showLabel: false
    });

    var pivotBlock = pivot.create($('#homePivot'), {
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    }, function() {
      $('.egg').align(pivotBlock.get());
    });


    /*
    $('.egg').align({
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    });
    */
  }
});