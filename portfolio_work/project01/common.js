$(function() { // 보이기 | 숨기기
	$(window).scroll(function() {
    if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
      $('.btn').fadeIn();
    } else {
      $('.btn').fadeOut();
    }
  }); // 버튼 클릭시 
  $(".btn").click(function() { 
  	$('html, body').animate({ scrollTop : 0  }, 400); // 속도 400 
  	return false; 
  }); 
});