!function(){$(".uiSectionVideo-classMode-checkbox").on("change",function(){$(".sectionMenu, .uiSectionVideo-classMode-off, .uiSectionVideo-classMode-on").toggle(),$(".sectionContent-mainContent").toggleClass("sectionContent-mainContent-classMode")});var e=window.matchMedia("(min-width: 900px)");!function(){var n=document.querySelector(".sectionMenu-openAction");if(n){var t=document.querySelector(".sectionMenu"),o=document.documentElement;n.addEventListener("click",c),o.addEventListener("click",function(e){e.target===o&&c()}),e.addListener(function(){e.matches&&(o.classList.remove("sectionMenuIsOpen"),t.classList.remove("sectionMenu_open"))})}function c(){e.matches||(o.classList.toggle("sectionMenuIsOpen"),t.classList.toggle("sectionMenu_open"),n.classList.toggle("sectionMenu_closed"))}}()}();