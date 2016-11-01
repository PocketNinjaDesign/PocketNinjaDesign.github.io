
// ------------------------------------- HEAD CONTENT

// VENDORS
//= require vendor/cssrelpreload.js
//= require vendor/loadCSS.js
//= require vendor/onloadCSS.js


//= require vendor/jquery-2.1.4.min.js
//= require vendor/chartist.js
//= require vendor/yo.min.js

var pn = {};

Yo.init({
  namespace: pn
  ,scriptRoot: 'ninjules'
  //,debugMode: true
  //,debugScripts: []
});


// ------------------------------------- BODY CONTENT
// Configs
//= require ninjules/config/_vars.js
//= require ninjules/config/charts.js


// Directive Component
//= require ninjules/yoTest.js

// Utils
//= require ninjules/utils/align.js

// Widgets
//= require ninjules/widget/pivot.js


// Directive Page
//= require ninjules/page/home.js