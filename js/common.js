$(function(){
 // $("nav ul li").each(function(){
 //   var num = $(this).find("a");
 //   console.log( $(num.hash))
 // });
$("nav ul li a, .back_to_top a, .footer_top a, a.button").click(function(){
  // console.log($(this.hash).offset().top)//hash코드를 가져오겠다.
  var thisElem = $(this.hash);
  $("html,body").stop();
  $("html,body").animate({scrollTop : thisElem.offset().top},1500);//1.5초

  //e.preventDefault();
  return false;
 });
});//document ready
