

Yo.add('page.home', ['utils.align', 'widget.pivot', 'config.charts'], function(utilsAlign, pivot, confCharts) {
  if($('#pageHome').length > 0) {
    var data = {
      series: [
        90, 180, 90
      ]
    };

    new Chartist.Pie('.ct-chart', data, confCharts.defaultPie);

    var pivotBlock = pivot.create($('#homePivot'), {
      type: 'set',
      e: $('.turnip'),
      y: 'top',
      x: 'left',
      yPivot: 'top',
      xPivot: 'left'
    }, function() {
      $('.egg').align(pivotBlock.get())
    });
  }
});