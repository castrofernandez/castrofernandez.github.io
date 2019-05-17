$(function() {
    var $block = $('.projects');
    var links = $block.find('[data-rel-project]');
    var projects = $block.find('.project');

    if (! $block.length) {
      return;
    }

    links.click(function (event) {
      event.preventDefault();

      links.removeClass('active');
      $(this).addClass('active');

      var project = $(this).data('rel-project');

      if (! project) {
        return;
      }

      projects.removeClass('active');
      $block.find('[data-project="' + project + '"]').addClass('active');
    });
});
