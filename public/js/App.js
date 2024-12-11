
$(document).ready(function(){
    
    init();
    
    function init(){
        
        cargarSeccion("home");
        
        //MAIN MENU DESKTOP
        $('#header-desktop #menu a').click(function(e){
            e.preventDefault();
            $('html, body').animate( {scrollTop : 0}, 0 );
            $("#menu li").removeClass('active');
            $(this).parent().addClass("active");
            var href = $(this).attr('href');
            var target = href.substring(1, href.length);
            cargarSeccion(target);    
        });
        
        //MAIN MENU MOVIL
        $('#header-movil a').click(function(e){
            e.preventDefault();
            
            $('html, body').animate( {scrollTop : 0}, 0 );
            $('#menu-movil').collapse('hide');
            
            var href = $(this).attr('href');
            var target = href.substring(1, href.length);
            cargarSeccion(target);    
        });
        
        //MAIN MENU DESKTOP
        $('.menu_footer a').click(function(e){
            e.preventDefault();

            $('html, body').animate( {scrollTop : 0}, 0 );
            $("#menu li").removeClass('active');
            var href = $(this).attr('href');
            var target = href.substring(1, href.length);
            console.log(target);
            cargarSeccion(target);    
        });
        
    }
    
    function cargarSeccion(url){
        
        $.ajax({
            url:"contenido/"+url+".html",
            cache:false,
            success: function(content){
                $("#loader").hide();                
                $("#content").empty().html(content);

                /* HOME HREF */
                $('#home a').click(function(e){
                    e.preventDefault();
                    var href = $(this).attr('href');
                    var target = href.substring(1, href.length);
                    
                    if(target=="coloresDesktop") window.open("App/Desktop.html", "nuevo", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, width=1200, height=600");
                    else if(target=="coloresMovil") window.open("App/Movil.html", "nuevo", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, width=600, height=900");
                    else cargarSeccion(target);
                });
                               
            },
            beforeSend: function(){}
        });
        
    }
    
});