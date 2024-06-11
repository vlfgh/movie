$(document).ready(function () {
  /* 메뉴 */
  $('.navi > li').mouseover(function () {
    $(this).find('.subMenu').stop().slideDown(500);
  });
  $('.navi > li').mouseout(function () {
    $(this).find('.subMenu').stop().slideUp(500);
  });

  /* 이미지 슬라이드 */
  const imgSlidHeight = $('.imgSlide').height();
  const imgs = 2;
  let now = 0;

  $('.imgSlide>a')
    .eq(0)
    .siblings()
    .animate({ marginTop: `-${imgSlidHeight}px` });

  setInterval(function () {
    now = now == imgs ? 0 : (now += 1);
    $('.imgSlide>a')
      .eq(now - 1)
      .animate({ marginTop: `-${imgSlidHeight}px` });
    $('.imgSlide>a').eq(now).animate({ marginTop: '0' });
  }, 3000);

  // ******  Modal 팝업  ****** //
  $('.notice li:first').click(function () {
    $('#modalWrap').addClass('active');
  });
  $('.btn').click(function () {
    $('#modalWrap').removeClass('active');
  });
});
