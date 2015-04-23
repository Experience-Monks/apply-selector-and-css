var applySelectorAndCss = require('./..');
var test = require('tape');

var css =  {

	'div': { width: '100px' },
	'#id': { height: '100px' },
	'.classA.classB': { background: '#F0F' }
};

test('with css', function(t) {

	var apply = applySelectorAndCss(css);
	var inBrowser = true;
	var el;

	try {
		el = document.createElement('div');
		document.body.appendChild(el);

		apply(el, 'div#id.classA.classB');
	} catch(e) {
		inBrowser = false;

		el = {};

		apply(el, 'div#id.classA.classB');
	}

	t.equal(el.id, 'id', 'id set properly');
	t.equal(el.className, 'classA classB', 'className set properly');
	t.equal(el.style.width, '100px', 'style width set properly');
	t.equal(el.style.height, '100px', 'style width set properly');

	if(inBrowser) {
		t.equal(el.style.background, 'rgb(255, 0, 255)', 'style background set properly');	
	} else {
		t.equal(el.style.background, '#F0F', 'style background set properly');
	}
	
	t.end();
});

test('without css', function(t) {
	var apply = applySelectorAndCss(css);
	var inBrowser = true;
	var el;

	try {
		el = document.createElement('div');
		document.body.appendChild(el);

		apply(el, 'div#thisIsAnId.aClass');
	} catch(e) {
		inBrowser = false;

		el = {};

		apply(el, 'div#id.classA.classB');
	}

	t.equal(el.id, 'thisIsAnId', 'id set properly');
	t.equal(el.className, 'aClass', 'className set properly');
	t.end();
});