
/*
 * There are a few ways to navigation the dom to get all registered widgets and their data
 *
 * 1. data-widget attribute which means other attributes like data-tab, data-dropdown etc exist
 * 2. data-widget which contains all widget data in a single JSON block
 * 3. Raw JS of all dom elements
 * 4. Via jQuery selection of all dom elements
 *
 */

Yo.add('utils.widgetFinder', function() {
  var
    WidgetFinder = function() {
      // Widget Finding script in here
    };

  return {
    WidgetFinder: WidgetFinder
  };
});