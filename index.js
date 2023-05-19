const navbar = document.querySelector('#navbar');
const navbarClasses = navbar.classList;


document.addEventListener('scroll',()=>{

    if(window.scrollY >0 ){
        navbarClasses.add("nav-scrolled");
    }else{
        navbarClasses.remove("nav-scrolled");
    }
})