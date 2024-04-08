$(function(){
    $('.con2').hide();


    $('.con1 button.btn1').click(function(){
        $('img.rabbit').addClass('active').siblings().removeClass('active');
        
        setTimeout(function(){ $('img.rabbit').removeClass('active');},1000)
           
    })//토끼

    $('.con1 button.btn2').click(function(){
        $('.first .bubble').addClass('active').siblings().removeClass('active');      
        // setTimeout(function(){ $('.first .bubble').removeClass('active');},1200)
    });//앵무새

    $('.con1 button.btn3').click(function(){
        $('img.weasel').addClass('active').siblings().removeClass('active');      
        // setTimeout(function(){ $('img.weasel').removeClass('active');},1200)
    });//족재비

    $('.con1 button.btn4').click(function(){
        $('img.t_tree').addClass('active').siblings().removeClass('active');      
        setTimeout(function(){ $('img.t_tree').removeClass('active');},1000)
        
    });//뱀

    $('.con1 button.btn5').click(function(){
        $('.con1').hide();
        $('.con2').show();
        $('*').removeClass('active'); 
    });//가까이다가가기




    $('.con2 button.btn1').click(function(){
        $('img.bduck2').addClass('active').siblings().removeClass('active');
        setTimeout(function(){ $('img.bduck2').removeClass('active');},1000)
    });//오리

    $('.con2 button.btn2').click(function(){
        $('img.bird_h').addClass('active').siblings().removeClass('active');
        setTimeout(function(){ $('img.bird_h').removeClass('active');},1000)
    });//앵무

    $('.con2 button.btn3').click(function(){
        $('img.iguana_t').addClass('active').siblings().removeClass('active');
        setTimeout(function(){ $('img.iguana_t').removeClass('active');},1000)
    });//이구아나

    $('.con2 button.btn4').click(function(){
        $('img.fox_t').addClass('active').siblings().removeClass('active');
        // setTimeout(function(){ $('img.fox_t').removeClass('active');},1200)
    });//여우
    $('.con2 button.btn5').click(function(){
        $('.con2').hide();
        $('.con1').show();
        $('*').removeClass('active'); 
    });

})//ready end