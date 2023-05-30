//네비 ul 슬라이드 다운
        $(".all_menu").mouseover(function(){
            $(this).children(".seafood").stop().slideDown();

        }).mouseout(function(){
            $(".seafood").stop().slideUp();

        })