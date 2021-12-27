$(document).ready(function () {
    var test = 1;
    trajRoquette1();
    trajRoquette2();
    setInterval(boom,1);
});
    $("body").keydown(function(key){
        console.log(key.key)
        switch(key.key){
            case "ArrowUp" :
               
                var blocage = parseFloat($("#avion").css("top"));
                console.log(blocage);
                if(blocage >= 50){

                $("#avion").css("top", "-=100px");
                }
                break;

            case "ArrowDown" :
                var blocage = parseFloat($("#avion").css("top"));
                console.log(blocage);
                
                if(blocage <= 580){
                $("#avion").css("top", "+=100px");
                }
                break;
        }

        
        
    });
    function trajRoquette1(){
        $("#roquette1").animate({left:"-800px"},1000,"linear",function(){
            $(this).css("left","800px");
            var vertical = Math.random()*740;
            vertical = Math.floor(vertical);
            $(this).css("top", vertical + "px");
            test = 1;
        });
        setTimeout("trajRoquette1()",1500);
    }

    function trajRoquette2(){
        $("#roquette2").animate({left:"-800px"},1000,"linear",function(){
            $(this).css("left","800px");
            var vertical = Math.random()*740;
            vertical = Math.floor(vertical);
            $(this).css("top", vertical + "px");
            test = 1;
        });
        setTimeout("trajRoquette2()",2200);
    }

    function boom(){
        var avionVertical = parseInt($("#avion").css("top"));
        var avionHorizontal = parseInt($("#avion").css("left"));
        var roquette1Vertical = parseInt($("#roquette1").css("top"));
        var roquette1Horizontal = parseInt($("#roquette1").css("left"));
        var roquette2Vertical = parseInt($("#roquette2").css("top"));
        var roquette2Horizontal = parseInt($("#roquette2").css("left"));

        if((roquette1Horizontal > avionHorizontal) && (roquette1Horizontal < (avionHorizontal+180)) && (roquette1Vertical >= avionVertical) && (roquette1Vertical < (avionVertical+120)) && test==1)
        {
            
             var nbBoom = parseInt($("#compteur").text());
             nbBoom++;
             $("#compteur").text(nbBoom);
            $("audio")[0].play();
             test =0;
        }
        if((roquette2Horizontal > avionHorizontal) && (roquette2Horizontal < (avionHorizontal+180)) && (roquette2Vertical >= avionVertical) && (roquette2Vertical < (avionVertical+120)) && test == 1)
        {
            var nbBoom = parseInt($("#compteur").text());
             nbBoom++;
             $("#compteur").text(nbBoom);
            $("audio")[0].play();
             test =0;
        }
    }
