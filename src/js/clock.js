$(function() {
  var $clock = $('#clock');
  var $hour = $clock.find('.hour');
  var $minutes = $clock.find('.minutes');
  var $seconds = $clock.find('.seconds');

  if (! $clock.length) {
    return;
  }

  function updateClock() {
    var date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hour = formatNumber(hour);
    minutes = formatNumber(minutes);
    seconds = formatNumber(seconds);

    $hour.html(hour);
    $minutes.html(minutes);
    $seconds.html(seconds);
  }

  function formatNumber(number) {
    return (number < 10 ? '0' : '') + number;
  }

  (function init() {
    updateClock();
    window.setInterval(updateClock, 1000);
  })();
});
