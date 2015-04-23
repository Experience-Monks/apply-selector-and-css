# apply-selector-and-css

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Setup id, className, and css for and HTMLElement. Handy for cases where sometimes css maybe applied from an external file or sometimes from inline.css

## Usage

[![NPM](https://nodei.co/npm/apply-selector-and-css.png)](https://www.npmjs.com/package/apply-selector-and-css)

```javascript
var applySelectorAndCss = require('apply-selector-and-css');

var css =  {
    'div': { width: '100px' },
    '#id': { height: '100px' },
    '.classA.classB': { background: '#F0F' }
};

var apply = applySelectorAndCss(css);

var el1 = document.createElement('div');
var el2 = document.createElement('div');
apply(el1, 'div#id');
apply(el2, '#id2.classSomething')

// el1 would look like this:
// <div id="id" style="width: 100px; height: 100px;"></div>
// 
// el2 would look like this this:
// <div id="id2" class="classSomething"></div>
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/apply-selector-and-css/blob/master/LICENSE.md) for details.
