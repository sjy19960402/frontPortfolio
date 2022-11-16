// nav - 이동한 영역에 맞는 a태그 스타일 변경
$(function(){
  // nav가 상단으로 떨어진값을 변수에 저장
  const nav_Offset = $('.nav-box').offset().top;
  console.log(nav_Offset);

  $(window).scroll(function(){ //화면을 스크롤하면 아래내용 동작
      let sPos = $(this).scrollTop(); //현재 세로 스크롤값을 변수에 담는다

      $('.nav-box li a').removeClass('nav-on');
      // article높이값을 세로스크롤 값 영역과 비교하여 해당 메뉴에 서식 on적용
      $('.scroll').each(function(i){
          let top = $(this).offset().top-340;

          if(sPos>=top){
              $('.nav-box li a').removeClass('nav-on');
              $('.nav-box li').eq(i).find('a').addClass('nav-on');
          }
      });
    });
  });

// .right-text-detail slide로 펼치고 접는 js
$( document ).ready( function() {
  $( '#down' ).click( function() {
    $( '.n01' ).slideToggle( 300 );
    $( '.i01' ).toggleClass( 'xi-angle-down xi-angle-up' );
  } );
  $( '#down02' ).click( function() {
    $( '.n02' ).slideToggle( 300 );
    $( '.i02' ).toggleClass( 'xi-angle-down xi-angle-up' );
  } );
} );

// responsive web tab menu
$(function(){
  // 첫번째 메뉴 서식
  $('.respon-box > ul > li:first-child > a').addClass('t_on');

  // 두번째 메뉴 콘텐츠 보이도록
  $('.respon-box .c01').css('display','block')

  // 탭메뉴 클릭시 해당 메뉴 서식을 적용, 콘텐츠도 보이게 + 선택하지 않은 콘텐츠를 숨기고, 서식도 제거
  const tab_mnu = $('.respon-box > ul > li > a');
  tab_mnu.click(function(){
      $(this).addClass('t_on').parent().siblings().find('a').removeClass('t_on');

      $(this).next().show().parent().siblings().find('.con').hide();

      return false; // #새로고침 방지
  });

});