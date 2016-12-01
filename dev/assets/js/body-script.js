
// ------------------------------------- HEAD CONTENT

// VENDORS
//= require vendor/cssrelpreload.js
//= require vendor/loadCSS.js
//#= require vendor/onloadCSS.js

loadCSS( "assets/css/app.css" );
loadCSS( "https://fonts.googleapis.com/css?family=Fredoka+One|Source+Sans+Pro:300:400:700" );


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