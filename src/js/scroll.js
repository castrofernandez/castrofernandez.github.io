
const subscribers = [];

(function init() {
  window.addEventListener('scroll', onScroll);
})();

function subscribe(s) {
  subscribers.push(s);

  // Run to load visible section events
  evaluate(s);
}

function getViewportOffset(e) {
  const scrollLeft = window.scrollLeft();
  const scrollTop = window.scrollTop();
  const offset = e.getBoundingClientRect();
  const rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + window.innerWidth, y2: scrollTop + window.innerHeight };
  const rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + e.offsetWidth, y2: offset.top + e.offsetHeight };

  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop,
    insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
  };
}

function onScroll() {
  for (var i = 0; i < subscribers.length; i++) {
    evaluate(subscribers[i]);
  }
}

function evaluate(subscriber) {
  const element = subscriber.element;
  const callback = subscriber.callback;
  const check = subscriber.check;
  const offset = getViewportOffset(element);

  if (!offset.insideViewport) {
    return;
  }

  if (check && !check(offset)) {
    return;
  }

  callback(element, offset);
}

module.exports = {
  subscribe
};
