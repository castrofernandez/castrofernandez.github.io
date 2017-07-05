$(function() {
  var $block = $('.header');
  var $nav = $block.find('nav');
  var $sections = $('.cv-section');
  var $lis = $block.find('.sections li');
  var $as = $lis.find('a');

  if (! $block.length) {
    return;
  }

  (function init() {
    for (var i = 0; i < $sections.length; i++) {
      var section = $sections.eq(i);

      Scroll.subscribe({
        element: section,
        check: function(offset) {
          return offset.top <= 0;
        },
        callback: function(section, offset) {
          setActiveLink(section, offset);
        }
      });
    }
  })();

  function setActiveLink($section, offset) {
    var section_id = $section.data('section');

    // Set active link
    $lis.removeClass('active');
    $lis.find('[href="#' + section_id + '"]').parent().addClass('active');

    // Set nav background color
    $nav.removeClass().addClass('nav-' + section_id);

    // Set active section
    $sections.removeClass('active');
    $section.addClass('active');

    // Set if it's completely in view
    var viewport_height = window.innerHeight;
    var section_visible_height = offset ? offset.top + $section.height() : 0;

    $sections.removeClass('in-view');

    if (section_visible_height >= viewport_height) {
      $section.addClass('in-view');
    }

    if (offset.top < -320) {
      $nav.addClass('mobile-scrolled');
    } else {
      $nav.removeClass('mobile-scrolled');
    }
  }
});
