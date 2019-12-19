import $ from 'jquery';
$(document).ready(()=>{
    $('.login-btn').click(()=>{
        $('.popup-window').css('display','flex');
        $('.popup-form').css({top:'50%'});
    });

    $('.signup-btn').click(()=>{
        $('.popup-window').css('display','flex');
        $('.popup-form').css({top:'50%'});
    });

   $('.popup-window').click(()=>{ 
        $('.popup-form').css({top:'-25%'});
        $('.popup-window').css('display', 'none');
   });

   $('.popup-form').click((e)=>{
       e.stopPropagation();
   });
});