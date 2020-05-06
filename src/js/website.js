$(function(){
    //Preloader Fade Out
    $(window).on("load",function(){
        
        setTimeout(function(){
        var body = document.querySelector("body");
        body.style.position = "relative";
        var loader = document.querySelector(".loader");
        loader.style.visibility = "hidden";
        var wrapper = document.querySelector(".preload-Wrapper");
        wrapper.className += " hidden";
        }, 1000);
    });

    //Defining Variables
    var $nav = $("#mainNavbar");
    var $home = $("#home");
    var $linkedin = $("#linkedinLink");
    var $github = $("#githubLink");
    var $name = $("#mainNavbarBrandName");

    //function based on scroll position -- nav transformation
    function transformNav(){
        if($(window).scrollTop() < $home.height()-$nav.height()){
            $nav.removeClass("scrolled");
            $nav.removeClass("navbar-light");
            $nav.addClass("unscrolled");
            $nav.addClass("navbar-dark");
            $linkedin.show();
            $github.show();
            $name.css("color", "white");
            $("#mainNavbar .nav-link").removeClass("textColour");
        } else{
            $nav.removeClass("unscrolled");
            $nav.removeClass("navbar-dark");
            $nav.addClass("scrolled");
            $nav.addClass("navbar-light");
            $linkedin.hide();
            $github.hide();
            $name.css("color", "rgb(66, 66, 66)");
            $("#mainNavbar .nav-link").addClass("textColour");
        }
    }

    //on reload function
    $(document).ready(function(){
        transformNav()
    });

    //On scroll
    $(document).scroll(function(){
        transformNav()

        //Collapses Nav Bar When Button Clicked
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    });
});