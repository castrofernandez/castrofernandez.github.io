$(function() {
  var $sections = $('.animation-section');

  (function init() {
    for (var i = 0; i < $sections.length; i++) {
      var section = $sections.eq(i);

      Scroll.subscribe({
        element: section,
        callback: function(section, offset) {
          Typing.load(section);
        }
      });
    }
  })();
});
