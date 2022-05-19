$(document).ready(function () {
  $("form").submit(function() {
    $("span").text("success!!!").show().fadeOut(1000);
  });

  $('#change_color').click(function() {
  $("header, footer").css({backgroundColor:'#F59FA1', color: '#fff'});
  return false;
});


  $('h1').mouseover(function() {

    //アニメーションしながらテキストサイズが大きくなる
    $(this).animate({fontSize : '24px'}, 500);

  //ここにはマウスを離したときの動作を記述
  }).mouseout(function() {

    //アニメーションしながらテキストサイズが元のサイズに戻る
    $(this).animate({fontSize : '16px'}, 500);

  });



});
