import $ from 'jquery';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

$(document).ready(()=>{
    $('.selectpicker').selectpicker();
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