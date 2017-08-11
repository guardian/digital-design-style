
var dist = 0;

window.onscroll = function() {
  var tester = document.querySelector('.slide .text');
  var wrapper = document.querySelector('body');
	var visible = checkVisible(tester, dist);

  if (visible) {
    document.querySelector('.slide .text').parentElement.classList.add('on');
  } else {
    document.querySelector('.slide .text').parentElement.classList.remove('on');
  }
};


function checkVisible(elm, threshold, mode) {
  threshold = threshold || 0;
  mode = mode || 'visible';

  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  var above = rect.bottom - threshold < 0;
  var below = rect.top - viewHeight + threshold >= 0;

  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}
