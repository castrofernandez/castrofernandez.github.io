function animarPanel(a){function b(a,b){function c(){var a=d.innerHTML.length;if(!(0>=a)){if(0==b){var e=d.innerHTML[0];d.innerHTML=d.innerHTML.substr(1),f.innerHTML=f.innerHTML+e}else{var e=d.innerHTML[a-1];d.innerHTML=d.innerHTML.substring(0,a-1),f.innerHTML=e+f.innerHTML}d.innerHTML.length>0?setTimeout(c,i):(f.className=f.className+=" completado",d.parentNode.removeChild(d))}}var d=a.querySelector("span"),e=d.className;e=e.replace(" visto","").replace(" completado",""),d.className=e+" oculto";var f=document.createElement("span");f.className=e+" visto",d.parentNode.insertBefore(f,d);var g=d.parentNode.offsetHeight;g=g>70?70:g,d.parentNode.style.minHeight=g+"px",d.style.display="none";var h=d.innerHTML.length,i=SALUDO_VELOCIDAD/(0!=h?h:1);setTimeout(c,i)}a=a?a:document,-1==a.className.indexOf("animacion")&&crearPuzzle(puzzle),a.className=a.className.replace("animacion","")+" animacion";for(var c=a.querySelectorAll(".avance:not(.avance-realizado)"),d=c.length,e=0;d>e;e++)b(c[e],0),c[e].className+=" avance-realizado"}var SALUDO_VELOCIDAD=1e3;animarPanel(document.querySelector(window.location&&window.location.hash?window.location.hash:".panel:first-of-type"));