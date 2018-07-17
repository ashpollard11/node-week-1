'use strict';

console.log('booooooo.');

//ajax GET request to localhost:1337
//put whatever it says in the h1

var $h1 = document.querySelector('h1');

axios.get('http://localhost:1337/pg13').then(function (response) {
	console.log(response);
	$h1.innerHTML = response.data;
}).catch(function (error) {
	console.log(error);
});

//random colors

var colors = ['rgba(255, 2, 42, 0.5)', 'rgba(255, 2, 182, 0.5)', 'rgba(255, 2, 182, 0.5)', 'rgba(2, 255, 169, 0.5)', 'rgba(2, 178, 255, 0.5)', 'rgba(139, 255, 2, 0.5)', 'rgba(255, 138, 2, 0.5)', 'rgba(226, 160, 255, 0.5)', 'rgba(255, 255, 86, 0.5)'];

window.addEventListener('load', function (e) {
	$h1.style.color = colors[Math.floor(Math.random() * colors.length)];
});
//# sourceMappingURL=pg.js.map
