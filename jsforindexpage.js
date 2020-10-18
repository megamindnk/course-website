
    $(document).ready(function () {
        var light = false; 
        $("#themechanger").click(function(){
            if(light == true){
                console.log("hello light theme");
                light = false;
                $(".theme").css({'color':"white"});
                
                $("body").addClass("bodybgdark");
                $("body").removeClass("bodybgwhite");
                $("#shape").addClass("backgrounddark");
                $("#shape").removeClass("backgroundlight");
                $(".courses > div >h1").css({'color': 'rgb(151, 159, 233)'});
                $(".page-titles > hr").css({'background-color': 'rgb(151,159,233)'});
                

        }
           else if(light == false){
                light=true;
                $(".theme").css({'color':"black"});
                $("body").removeClass("bodybgdark");
                $("body").addClass("bodybgwhite");
                
                $("#shape").removeClass("backgrounddarl");
                $("#shape").addClass("backgroundlight");
                $(".courses > div >h1").css({'color': 'rgb(0, 0, 0)'});
                $(".page-titles > hr").css({'background-color': 'rgb(0,0,0)'});
            }
        })
    });
