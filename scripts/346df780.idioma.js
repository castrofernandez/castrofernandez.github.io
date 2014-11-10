var etiquetas={es:{inicio:"Inicio",estudios:"Estudios",cursos:"Cursos",experiencia:"Experiencia",proyectos:"Proyectos",subtitulo:"INGENIERO INFORMÁTICO ∙ DISEÑADOR WEB",bienvenido:"¡Bienvenido!",welcome:"Welcome!",introduccion_1:"Bienvenido a mi espacio personal.",introduccion_2:"Aquí encontrarás información sobre mí, mis conocimientos y mi experiencia profesional.",informatica:"Informática",diseno:"Diseño",ingenieria:"Ingeniería",master:"Máster en Ingeniería Web",patrones:"Patrones de diseño",compiladores:"Compiladores e intérpretes",CIT:"CIT - Cork",irlanda:"Irlanda",uniovi:"Universidad de Oviedo",ingenieria_informatica:"Ingeniería Informática de Sistemas",estructura_datos:"Estructuras de datos",algoritmia:"Algoritmia",SSOO:"Sistemas Operativos",redes:"Redes",BBDD:"Bases de datos",ingeniera_software:"Ingeniería del software",idiomas:"Idiomas",espanol:"Español",hablante:"Hablante nativo",ingles:"Inglés",EOI:"Escuela Oficial de Idiomas",frances:"Francés",aleman:"Alemán",italiano:"Italiano",conocimientos_basicos:"Conocimientos básicos",diseno_web_adaptativo:"Diseño Web Adaptativo",ocho_semanas:"8 semanas",desarrollo_iphone:"Desarrollo básico de aplicaciones para iPhone",cuatro_semanas:"4 semanas",aplicaciones_moviles:"Aplicaciones Web para dispositivos móviles",veinte_horas:"20 horas",c_horas:"45 horas",desarrollo_web_avanzado:"Desarrollo Web Avanzado",imagen_digital:"Imagen digital",aplicaciones_oracle:"Aplicaciones empresariales con base de datos Oracle",tecnico_investigador:"Técnico Investigador",responsable_interfaces:"Responsable de Interfaces de Usuario",diseno_adaptativo:"Diseño adaptativo",desde_2013:"Desde 2013",desarrollador_IDI:"Desarrollador I+D+i",desarrollador_gestion:"Desarrollador de aplicaciones de gestión y contabilidad",profesor_particular:"Profesor de clases particulares para estudiantes universitarios",introduccion_programacion:"Introducción a la Programación"},en:{inicio:"Home",estudios:"Studies",cursos:"Courses",experiencia:"Experience",proyectos:"Projects",subtitulo:"COMPUTER ENGINEER ∙ WEB DESIGNER",bienvenido:"Welcome!",welcome:"¡Bienvenido!",introduccion_1:"Welcome to my personal site.",introduccion_2:"Here you'll find information about me, my knowledge and my professional experience.",informatica:"Computer Science",diseno:"Design",ingenieria:"Engineering",master:"Master in Web Engineering",patrones:"Design Patters",compiladores:"Compilers and Interpreters",CIT:"CIT - Cork",irlanda:"Ireland",uniovi:"University of Oviedo",ingenieria_informatica:"Computer Engineering",estructura_datos:"Data Structures",algoritmia:"Algorithms",SSOO:"Operating Systems",redes:"Network",BBDD:"Data Bases",ingeniera_software:"Software Engineering",idiomas:"Languages",espanol:"Spanish",hablante:"Native speaker",ingles:"English",EOI:"State Language School",frances:"French",aleman:"German",italiano:"Italian",conocimientos_basicos:"Basic knowledge",diseno_web_adaptativo:"Responsive Web Design",ocho_semanas:"8 weeks",desarrollo_iphone:"Basic iPhone App Development",cuatro_semanas:"4 weeks",aplicaciones_moviles:"Web Apps for Mobile Devices",veinte_horas:"20 hours",c_horas:"45 hours",desarrollo_web_avanzado:"Advanced Web Developement",imagen_digital:"Digital Image",aplicaciones_oracle:"Professional Apps with Oracle Database",tecnico_investigador:"Technical researcher",responsable_interfaces:"User Interface Responsible",diseno_adaptativo:"Responsive Design",desde_2013:"Since 2013",desarrollador_IDI:"Developer I+D+i",desarrollador_gestion:"Developer of Accounting Apps",profesor_particular:"Private lessons teacher for College students",introduccion_programacion:"Programming introduction"}},idioma=new function(a){function b(b){e(b),f=b;var c=a[b];if(c)for(var d=document.querySelectorAll("[data-etiqueta]"),g=d.length,h=0;g>h;h++){var i=d[h],j=i.getAttribute("data-etiqueta");if(j){var k=c[j];k&&(i.innerHTML=k)}}}function c(){var a=window.location.href.split("#");if(a.length<1)return null;if(a=a[0].split("?"),a.length<2)return null;for(var b=a[1],c=b.split("&"),d=c.length,e=0;d>e;e++){var f=c[e],h=f.split("=");if(!(h.length<2)&&"idioma"==h[0]){var i=h[1];return-1!=g.indexOf(i)?i:null}}return null}function d(){var a=c();if(a)f=a;else{var d=navigator.language||navigator.userLanguage;d=d.split("-"),d=d.length>0?d[0]:"en",-1==g.indexOf(d)&&(f="en")}"es"!=f&&b(f)}function e(a){var b=window.location.href.split("#"),c=b.length>1?b[1]:null;b=b[0],b=b.split("?"),b=b[0];var d=b+"?idioma="+a;c&&(d=d+"#"+c),history.pushState(null,null,d)}var f="es",g=["en","es"];this.traducir=b,d();for(var h=document.querySelectorAll(".idiomas li.etiqueta"),i=h.length,j=0;i>j;j++){var k=h[j],l=k.getAttribute("data-idioma");l==f&&(k.className="etiqueta activa"),k.onclick=function(){for(var a=0;i>a;a++){var b=h[a];b.className="etiqueta"}this.className="etiqueta activa";var c=this.getAttribute("data-idioma");c!=f&&idioma.traducir(c)}}}(etiquetas);