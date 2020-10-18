
    $(document).ready(function () {
        var light = false;
        var allbodytxt = document.getElementsByClassName('bodytext');
        var i;

         var divbg = $(".bg-dark");  
         var teambg = $(".bg-secondary"); 
        $("#themechanger").click(function(){
            if(light == true){
                light = false;

                $(divbg).each(function (index, value) {
                    $(value).removeClass("bg-success");
                    $(value).addClass("bg-dark");                       
                }); 

                $(divbg).each(function (index, value) {
                    $(value).removeClass("bg-info");
                    $(value).addClass("bg-seconday");                       
                }); 


                for(i=0;i<allbodytxt.length;i++)
                    allbodytxt[i].style.color = "white";

                $(".theme").css({'color':"white"});
                
                $("body").addClass("bodybgdark");
                $("body").removeClass("bodybgwhite");
                $("#shape").addClass("backgrounddark");
                $("#shape").removeClass("backgroundlight");
                
                $(".page-titles >h1").css({'color': 'rgb(151, 159, 233)'});
                $(".footer h2").css({'color': 'rgb(151, 159, 233)'});
                $(".page-titles > hr").css({'background-color': 'rgb(151,159,233)'});
                
                $("#shape").addClass("backgrounddark");
                $("#shape").removeClass("backgroundlight");

                $(".footer").css({'background-color':' rgb(48, 44, 44)'});

        }
           else if(light == false){
                light=true;
                
                
                $(divbg).each(function (index, value) {
                      $(value).removeClass("bg-dark");
                      $(value).addClass("bg-success");                       
                }); 

                $(teambg).each(function (index, value) {
                    $(value).removeClass("bg-secondary");
                    $(value).addClass("bg-info");                       
                });

                for(i=0;i<allbodytxt.length;i++)
                    allbodytxt[i].style.color = "black";


                $(".theme").css({'color':"black"});
                $("body").removeClass("bodybgdark");
                $("body").addClass("bodybgwhite");
                $("#shape").removeClass("backgrounddarl");
                $("#shape").addClass("backgroundlight");
                $(".page-titles > h1 ").css({'color': 'rgb(0, 0, 0)'});
                $(".footer h2").css({'color': 'rgb(0,0,0)'});
                $(".page-titles > hr").css({'background-color': 'rgb(0,0,0)'});

                $(".footer").css({'background-color':'rgb(63, 223, 175)'});
            }
        })
    });
