  
// If we need to use custom DOM library, let's save it to $$ variable:
// te conviene poner TODAS las variables globales acá arriba así no se te hace tanto bardo
var $$ = Dom7;
var x = 3;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/pagina2/',
        url: 'pagina2.html'
      }
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
    $$('#linkGoogle').on('click', (context) => console.log(context));

})

fn

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
})


$$(document).on('page:init', '.page[data-name="pagina2"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  alert('Estas por abrir la página2 wachin. la variable x tiene el valor' + x);
})

