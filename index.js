const navtoggle = document.queryselector(".nav-toggle");
const navMenu = document.toggle(".nav-menu");

navToggle.addEventlistener("click", () => {
    navMenu.classlist.toggle("nav-menu_visible");
    
    if (navMenu.classlist.contains("nav-menu_visible")){
        navtoggle.setAttribute("aria-label","cerrar menu");
    }else{
        navtoggle.setAttribute("aria-label","abrir menu");
    }
});

