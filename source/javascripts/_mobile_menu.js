$(function() {
  var $block = $('.mobile-menu');
  var $header = $('.header');
  var $burger = $('.burger');
  var $app = $('main.app');
  var $links = $block.find('.sections a');

  if (! $block.length) {
    return;
  }

  (function init() {
    $burger.click(function(event) {
      event.preventDefault();

      if ($app.hasClass('opened')) {
        setTimeout(function() {
          $header.addClass('sticky');
        }, 1000);
      } else {
        $header.removeClass('sticky');
      }

      $app.toggleClass('opened');
    });

    $links.click(function(event) {
      $app.removeClass('opened');
    });
  })();
});
