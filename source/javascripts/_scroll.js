var Scroll = (function() {
  var subscribers = [];

  (function init() {
    $(window).scroll(onScroll);
  })();

  function subscribe(s) {
    subscribers.push(s);

    // Run to load visible section events
    evaluate(s);
  }

  function getViewportOffset($e) {
    var $window = $(window),
      scrollLeft = $window.scrollLeft(),
      scrollTop = $window.scrollTop(),
      offset = $e.offset(),
      rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
      rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };

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
    var element = subscriber.element;
    var callback = subscriber.callback;
    var check = subscriber.check;
    var offset = getViewportOffset(element);

    if (! offset.insideViewport) {
      return;
    }

    if (check && !check(offset)) {
      return;
    }

    callback(element, offset);
  }

  return {
    'subscribe': subscribe
  }
})();
