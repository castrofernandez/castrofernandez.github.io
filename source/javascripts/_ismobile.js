var IsMobile = (function() {
  function isMobile() {
    return isVisible('#mobile-breakpoint');
  }

  function isTablet() {
    return isVisible('#tablet-breakpoint');
  }

  function isTabletLandscape() {
    return isVisible('#tablet-landscape-breakpoint');
  }

  function isAnyTablet() {
    return isTablet() || isTabletLandscape();
  }

  function isResponsive() {
    return isMobile() || isAnyTablet();
  }

  function isSmallDesktop() {
    return isVisible('#small-desktop-breakpoint');
  }

  function isDesktop() {
    return isVisible('#desktop-breakpoint');
  }

  function isAnyDesktop() {
    return isSmallDesktop() || isDesktop();
  }

  function isVisible(element) {
    return $(element).css('display') !== 'none';
  }

  return {
    isMobile: isMobile,
    isTablet: isTablet,
    isTabletLandscape: isTabletLandscape,
    isAnyTablet: isAnyTablet,
    isResponsive: isResponsive,
    isSmallDesktop: isSmallDesktop,
    isDesktop: isDesktop,
    isAnyDesktop: isAnyDesktop
  };
})();
