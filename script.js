//*positioning coordinates
var xpos = Math.floor(Math.random()*24);
var ypos = Math.floor(Math.random()*30); 
var xpos2 = Math.floor(Math.random()*24);
var ypos2 = Math.floor(Math.random()*20);
var xpos3 = Math.floor(Math.random()*24);
var ypos3 = Math.floor(Math.random()*20);
var xpos4 = Math.floor(Math.random()*20);
var ypos4 = Math.floor(Math.random()*20);
var xpos5 = Math.floor(Math.random()*24);
var ypos5 = Math.floor(Math.random()*20);
var xpos6 = Math.floor(Math.random()*24);
var ypos6 = Math.floor(Math.random()*30);
var xpos7 = Math.floor(Math.random()*24);
var ypos7 = Math.floor(Math.random()*30);
var xpos8 = Math.floor(Math.random()*24);
var ypos8 = Math.floor(Math.random()*30);
var xpos9 = Math.floor(Math.random()*24);
var ypos9 = Math.floor(Math.random()*30);
var xpos10 = Math.floor(Math.random()*24);
var ypos10 = Math.floor(Math.random()*30);
var xpos11 = Math.floor(Math.random()*24);
var ypos11= Math.floor(Math.random()*30);

var multi1=Math.floor(Math.random()*5);

/*diameters*/
var html_num = 174;
var css_num = 150;
var php_num = 18;
var js_num = 12;
var webdes_num = 111;
var ui_num = 100;
var email_num = 29;
var flash_num = 23;
var contCreation_num = 57;
var contMgmt_num = 145;
var webAd_num = 53;
var webGraphics_num = 71;
var sitemap_num = 31;
var wireframe_num = 28;
var wordpress_num = 133;

/*document calls*/

$(document).ready(function() {
    $('#html_circ').fadeIn(8000);
    $('#css_circ').fadeIn(4000);
    $('#php_circ').fadeIn(8000);
    $('#js_circ').fadeIn(5000);
    $('#webdes_circ').fadeIn(5000);
    $('#ui_circ').fadeIn(5000);
    $('#email_circ').fadeIn(4000);
    $('#flash_circ').fadeIn(5000);
    $('#contCreation_circ').fadeIn(6000);
    $('#contMgmt_circ').fadeIn(5000);
    $('#webAd_circ').fadeIn(8000);
    $('#webGraphics_circ').fadeIn(5000);
    $('#sitemap_circ').fadeIn(5000);
    $('#wireframe_circ').fadeIn(7000);
    $('#wordpress_circ').fadeIn(5000);
});


/*HTML DIV*/
$("#html_circ").css({position:'absolute', left: xpos, top: ypos});
$( "#html_circ").on( "mouseenter", function() {
$( this ).addClass( "border");
 $("#html_tag").show( "slow");
});
$( "#html_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $( "#html_tag" ).hide( "slow");
});
document.getElementById('html_circ').style.height = html_num +25+'px';
document.getElementById('html_circ').style.width = html_num+25+'px';



/*CSS DIV*/
 $("#css_circ").css({position:'absolute', left: 490-xpos, top: (ypos2*3 +180)});

$( "#css_circ").on("mouseenter", function() {
    $( this ).addClass("border");
    $("#css_tag").show("slow");
});
$( "#css_circ" ).on( "mouseleave", function() {
    $( this ).removeClass("border");
    $("#css_tag" ).hide("slow");
});
document.getElementById('css_circ').style.height = css_num+25+'px';
document.getElementById('css_circ').style.width = css_num+25+'px';


/*PHP DIV*/
$("#php_circ").css({position:'absolute', left: 350+xpos2, top: ypos});

$( "#php_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#php_tag" ).show("slow");
});
$( "#php_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#php_tag" ).hide("slow");
});
document.getElementById('php_circ').style.height = php_num +25+'px';
document.getElementById('php_circ').style.width = php_num+25+'px';


/*JS DIV*/
$("#js_circ").css({position:'relative', left: 550-xpos4, top: ypos4*2});

$( "#js_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#js_tag").show( "slow");
});
$( "#js_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#js_tag").hide( "slow");
});
document.getElementById('js_circ').style.height = js_num +25+'px';
document.getElementById('js_circ').style.width = js_num+25+'px';

/*WEBDES DIV*/
$("#webdes_circ").css({position:'absolute', left: xpos5+170, top: ypos5});
$( "#webdes_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#webdes_tag" ).show("slow");
});

$( "#webdes_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#webdes_tag" ).hide("slow");
});
document.getElementById('webdes_circ').style.height = webdes_num +25+'px';
document.getElementById('webdes_circ').style.width = webdes_num+25+'px';

/*UI DIV*/
$("#ui_circ").css({position:'absolute', left: xpos6+220, top: ypos6 + 260});
$( "#ui_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#ui_tag" ).show("slow");
});
$( "#ui_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#ui_tag" ).hide("slow");
});
document.getElementById('ui_circ').style.height = ui_num +25+'px';
document.getElementById('ui_circ').style.width = ui_num+25+'px';

/*FLASH DIV*/
$("#flash_circ").css({position:'absolute', left: 560-xpos7, top: 70+ypos7});
$( "#flash_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#flash_tag" ).show("slow");
});
$( "#flash_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#flash_tag" ).hide("slow");
});
document.getElementById('flash_circ').style.height = flash_num +25+'px';
document.getElementById('flash_circ').style.width = flash_num+25+'px';

/*EMAIL DIV*/
$("#email_circ").css({position:'absolute', left: 500-xpos7, top: 100+ypos7});
$( "#email_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#email_tag" ).show("slow");
});
$( "#email_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#email_tag" ).hide("slow");
});
document.getElementById('email_circ').style.height = email_num +25+'px';
document.getElementById('email_circ').style.width = email_num+25+'px';

/*CONTENT CREATION DIV*/
$("#contCreation_circ").css({position:'absolute', left: (xpos8 + 150), top: ypos8 + 160});
$( "#contCreation_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#contCreation_tag" ).show("slow");
});
$( "#contCreation_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#contCreation_tag" ).hide("slow");
});
document.getElementById('contCreation_circ').style.height = contCreation_num+25+'px';
document.getElementById('contCreation_circ').style.width = contCreation_num+25+'px';

/*CONTENT MANAGEMENT DIV*/
$("#contMgmt_circ").css({position:'absolute', left: (360 - xpos9), top: 200 - ypos9});
$( "#contMgmt_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#contMgmt_tag" ).show("slow");
});
$( "#contMgmt_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#contMgmt_tag" ).hide("slow");
});
document.getElementById('contMgmt_circ').style.height = contMgmt_num + 25+'px';
document.getElementById('contMgmt_circ').style.width = contMgmt_num + 25+'px';



/*WEB AD DIV*/
$("#webAd_circ").css({position:'absolute', left:xpos3, top: 225+ypos2});

$( "#webAd_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#webAd_tag" ).show("slow");
});
$( "#webAd_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#webAd_tag" ).hide("slow");
});
document.getElementById('webAd_circ').style.height = webAd_num +25+'px';
document.getElementById('webAd_circ').style.width = webAd_num+25+'px';

/*WEB GRAPHICS DIV*/
$("#webGraphics_circ").css({position:'absolute', left:380-xpos9, top: 100-ypos2});

$( "#webGraphics_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#webGraphics_tag" ).show("slow");
});
$( "#webGraphics_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#webGraphics_tag" ).hide("slow");
});
document.getElementById('webGraphics_circ').style.height = webGraphics_num +25+'px';
document.getElementById('webGraphics_circ').style.width = webGraphics_num+25+'px';

/*Sitemap DIV*/
$("#sitemap_circ").css({position:'absolute', left:450-xpos5, top: 10+ypos2});

$( "#sitemap_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#sitemap_tag" ).show("slow");
});
$( "#sitemap_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#sitemap_tag" ).hide("slow");
});
document.getElementById('sitemap_circ').style.height = sitemap_num +25+'px';
document.getElementById('sitemap_circ').style.width = sitemap_num+25+'px';

/*Wireframe DIV*/
$("#wireframe_circ").css({position:'absolute', left:280-xpos3, top: 190-ypos2});

$( "#wireframe_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#wireframe_tag" ).show("slow");
});
$( "#wireframe_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#wireframe_tag" ).hide("slow");
});
document.getElementById('wireframe_circ').style.height = wireframe_num +25+'px';
document.getElementById('wireframe_circ').style.width = wireframe_num+25+'px';

/*Wordpress DIV*/
$("#wordpress_circ").css({position:'absolute', left: 35+xpos3, top: 270-ypos2});

$( "#wordpress_circ").on( "mouseenter", function() {
    $( this ).addClass( "border");
    $("#wordpress_tag" ).show("slow");
});
$( "#wordpress_circ" ).on( "mouseleave", function() {
    $( this ).removeClass( "border");
    $("#wordpress_tag" ).hide("slow");
});
document.getElementById('wordpress_circ').style.height = wordpress_num +25+'px';
document.getElementById('wordpress_circ').style.width = wordpress_num+25+'px';





