$(document).ready(function(){
  AOS.init();

  // 햄버거 버튼
  var burger = $('.menu-trigger');
  
  burger.on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('active')){
      // 닫혔을 때
      $(this).removeClass('active');
      $('html').removeClass('drawer-open');
    }else {
      // 열렸을 때
      $(this).addClass('active');
      $('html').addClass('drawer-open');
    }
    $('.menu a').on('click', function(){
      var idx = $(this).parent().index();
      fullpage_api.moveTo(idx+1);
      $('.menu-trigger').removeClass('active');
      $('html').removeClass('drawer-open');
    });
  });

  //다크모드
  $('.mode').on('click', function(){
    $('html').toggleClass('darkmode');
    return false;
  });
 

});

// iframe 시간
function clock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (hours > 12) {
    hours -= 12;
  } else if (hours == 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  $('.w-popup_time').html(hours + ':' + minutes);
}
 
clock();
setInterval(clock, 1000);