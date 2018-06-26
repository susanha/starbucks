// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    modalTitle: 'Framework7',
	panel:{swipe: 'left'},
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/breakfast/',
    	url: 'breakfast.html',
    	name: 'breakfast',
  		},
		
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/producto/',
    	url: 'info-producto.html',
    	name: 'producto',
		},
		
		{
		path: '/menu-espresso/',
    	url: 'menu-espresso.html',
    	name: 'menu-espresso',
		},
		{
		path: '/info-espresso/',
    	url: 'info-espresso.html',
    	name: 'menu-espresso',
		},
		
  		
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

