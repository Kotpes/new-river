/** Appear animation **/

$(document).ready(function() {    
    $('#katera').hide().delay(3400).fadeTo(1000, 1).end();
    $('#teplohodi').hide().delay(3600).fadeTo(1000, 1).end();
    $('#slideshow_banner').hide().delay(800).fadeTo(1000, 1).end();
    $('#add').hide().delay(3200).fadeTo(1000, 1).end();
    $('#maksimus #picture').hide().delay(2800).fadeTo(1000, 1).end();

    $('#phone').hide().delay(2800).fadeTo(1000, 1).end();
    $('#heading').hide().delay(2800).fadeTo(1000, 1).end();
    $('#heading_big').hide().delay(2800).fadeTo(1000, 1).end();
    

    $('#maksimus').hide().delay(2600).fadeTo(1000, 1).end();
    $('#addservices').hide().delay(3000).fadeTo(1000, 1).end();
    $('#lidia #picture').hide().delay(2800).fadeTo(1000, 1).end();
    $('#lidia').hide().delay(3000).fadeTo(1000, 1).end();
    $('h1').hide().delay(3000).fadeTo(1000, 1).end();
    $('#maksimus img').hover(function(){
       $('#addinfo1').css('z-index', '26').fadeTo(150, 1);
       },
       function() {
       $('#addinfo1').fadeTo(150, 0).css('z-index', '15'); 
       });
    $('#lidia img').hover(function(){
       $('#addinfo2').css('z-index', '26').fadeTo(150, 1);
       },
       function() {
       $('#addinfo2').fadeTo(150, 0).css('z-index', '15'); 
       });   
    $('#add').click(function() {
      $('#addservices').slideToggle('200');
      });  
    $('#form').css('display', 'none');
    $('a, .close').click(function() {
      $('#form').slideToggle('200');
      }); 
   });




/** Slideshow **/

$(document).ready(function(){
   $("#slideshow_banner > div:gt(0)").hide();
    setInterval(function() { 
      $('#slideshow_banner > div:first')
        .fadeOut(2000)        
        .next()
        .fadeIn(2000) 
        .end()
        .appendTo('#slideshow_banner');
    },  20000);
});

/** Tooltip **/

