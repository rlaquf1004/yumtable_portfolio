

    $(function(){

        //슬라이더 자바스크립트

        function slide(){

            $(".slide").stop().animate({marginLeft:-1920},800,function(){
                $(".slide li:first").appendTo(".slide");
                $(".slide").css({marginLeft:0})
            })
            }
    
    
            setInterval(slide, 3000)
    
    
    
    
            //이전버튼
            function prev(){
    
            $(".slide li:last").prependTo(".slide")
            $(".slide").css({marginLeft:-1920})
            $(".slide").stop().animate({marginLeft:0},800)
            }
    
            $(".prev").click(function(){
            prev();
            });
    
            //다음버튼
            function next(){
            $(".slide").stop().animate({marginLeft:-1920},800,function(){
                $(".slide li:first").appendTo(".slide");
                $(".slide").css({marginLeft:0})
            })
    
            }
    
            $(".next").click(function(){
            next();
            });




    })
        



