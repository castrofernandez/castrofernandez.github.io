var Typing = (function() {
  var typing_queue = [];
  var typing_chain_queue = [];
  var interval = null;

  function load(section) {
    if (section.hasClass('animated')) {
      return;
    }

    section.addClass('animated');

    var typings = section.find('.typing').addBack('.typing');
    var typing_chains = section.find('.typing-chain').addBack('.typing-chain');

    processTyping(typings);
    processTypingChain(typing_chains);
  };

  function processTyping(typings) {
    typings.each(function() {
      typing_queue.push(Typing({
        element: $(this)
      }));
    });
  }

  function processTypingChain(typing_chains) {
    typing_chains.each(function() {
      var children = $(this).find('.typing-child');
      var first = isBackwards($(this)) ? children.last() : children.first();
      first.addClass('started');

      typing_chain_queue.push(Typing({
        element: first,
        callback: processTypingChainNext,
        speed: 200,
        delay: 500
      }));
    });
  }

  function processTypingChainNext(element) {
    var parent = element.closest('.typing-chain');
    var siblings = parent.find('.typing-child:not(.started)');

    if (siblings.length) {
      var sibling = isBackwards(parent) ? siblings.last() : siblings.first();
      sibling.addClass('started');

      typing_chain_queue.push(Typing({
        element: sibling,
        delay: 1,
        callback: processTypingChainNext,
        speed: 200
      }));
    }
  }

  function isBackwards(element) {
    if (element.hasClass('backwards')) {
      return true;
    }

    if (element.hasClass('backwards-desktop')) {
      return IsMobile.isAnyDesktop();
    }
  }

  return {
    load: load
  }

  function Typing(options) {
    var element = options.element;
    var delay = options.delay || 0;
    var callback = options.callback || null;
    var speed = options.speed || 1000;

    var text = element.html();
    var to_type = text.split('');
    var typed = [];
    var interval = null;
    var char_speed = speed / to_type.length;
    var finished = false;

    function write() {
      if (! to_type.length) {
        finish();
        return false;
      }

      typed.push(to_type[0]);
      to_type.shift();

      var html = '<span class="writen">'
        + typed.join('') + '</span><span class="to-type">'
        + to_type.join('') + '</span>';

      element.addClass('typing')
        .addClass('started').html(html);

      if (! to_type.length) {
        finish();
        return false;
      }

      return true;
    }

    function finish() {
      if (finished) {
        return;
      }

      finished = true;

      clearInterval(interval);

      if (callback) {
        callback(element);
      }
    }

    function startInterval() {
      interval = setInterval(write, char_speed);
    }

    (function init() {
      setTimeout(startInterval, delay);
    })();
  }
})();
