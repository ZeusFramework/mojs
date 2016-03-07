import h          from './h';
import shapesMap  from './shapes/shapesMap';
import Burst      from './burst';
import Transit    from './transit';
import Swirl      from './swirl';
import stagger    from './stagger';
import Spriter    from './spriter';
import MotionPath from './motion-path';
import Tween      from './tween/tween';
import Timeline   from './tween/timeline';
import Tweener    from './tween/tweener';
import Tweenable  from './tween/tweenable';
import tweener    from './tween/tweener';
import easing     from './easing/easing';

window.mojs = {
  revision:   '0.177.3', isDebug: true, helpers: h,
  Transit, Swirl, Burst, stagger, Spriter, MotionPath,
  Tween, Timeline, Tweenable, tweener, easing, shapesMap
}

mojs.h     = mojs.helpers;
mojs.delta = mojs.h.delta;

var tr = new mojs.Transit({
  radius: { 0: 200 },
  duration: 2000,
  // repeat: 2,
  // yoyo: true,
  isShowEnd: true
})
  .then({ radius: 50, easing: 'elastic.out' })
  .then({ x: 200, easing: 'elastic.in' })
  .then({ radius: 500, x: 0 })
  .play();
  // console.log(tr.timeline._timelines[0]._props.onComplete)

// setTimeout(function () {
//   tr.run({ fill: 'yellow', radius: 3000 });
// }, 2000);

// ### istanbul ignore next ###
if ( (typeof define === "function") && define.amd ) {
  define("mojs", [], function () { return mojs; });
}
// ### istanbul ignore next ###
if ( (typeof module === "object") && (typeof module.exports === "object") ) {
  module.exports = mojs;
}
