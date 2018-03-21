$(function() {
  var translatables = $('[data-es]');
  var selectors = $('.lang-s');
  var valid_languages = ['en', 'es'];
  var default_language = 'en';

  (function init() {
    processEnglish();
    processSelectors();
    setInitialLanguage();
  })();

  function processEnglish() {
    translatables.each(function() {
      var value = $(this).html();
      $(this).attr('data-en', value);
    });
  }

  function processSelectors() {
    selectors.click(function(event) {
      event.preventDefault();

      var language = $(this).data('language');
      changeLanguage(language);

      setActiveLanguageLink(language, $(this));
    });
  }

  function setActiveLanguageLink(language, element) {
    selectors.parent().removeClass('active');

    element = element || selectors.filter('[data-language="' + language + '"]');
    element.parent().addClass('active');
  }

  function changeLanguage(language) {
    if (valid_languages.indexOf(language) === -1) {
      language = default_language;
    }

    translatables.each(function() {
      var value = $(this).data(language);

      var writen = $(this).find('.writen');

      if (writen.length) {
        writen.html(value);
      } else {
        $(this).html(value);
      }
    });

    setActiveLanguageLink(language);
    changeUrl(language);
  }

  function setInitialLanguage() {
    var language = detectLanguage() || default_language;

    changeLanguage(language);
  }

  function detectLanguage() {
    var language = getUrlParameter('language');

    if (language) {
      return language;
    }

    var language = navigator.language || navigator.userLanguage;

    if (language) {
      language = language.split('-')[0];
    }

    return language;
  }

  function getUrlParameter(name) {
    var url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (! results) {
      return null;
    }

    if (! results[2]) {
      return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function changeUrl(language) {
    var hash = window.location.hash;

    var url = '/?language=' + language + (hash ? hash : '');

    history.pushState({}, "", url);
  }

  window.onpopstate = function(e) {
    setInitialLanguage();
  }
});
