// 스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
$(document).ready(function(){
  $(window).scroll(function(){
  let sPos = $(this).scrollTop();
  console.log(sPos);//스크롤값을 체크한다.
  // 스크롤 값에 따른 헤더 스타일 변경
  if(sPos>=50){
    $("header").addClass("on");
  }else{
    $("header").removeClass("on");
  }
  // 스크롤 값에 따른 skill-box 등장 이벤트
  if(sPos>=530){
    $( '.skill-box' ).fadeIn( 1000, 'swing');
  }else{
    $( '.skill-box' ).fadeOut( 1000, 'swing');
  }
    // 스크롤 값에 따른 node.js, team project 문구 등장 이벤트
    if(sPos>=1040){
      $( '.node .node-bg p:first-of-type' ).fadeIn( 1000, 'swing');
    }else{
      $( '.node .node-bg p:first-of-type' ).fadeOut( 1000, 'swing');
    }
    if(sPos>=1180){
      $( '.node .node-bg p:last-of-type' ).fadeIn( 1000, 'swing');
    }else{
      $( '.node .node-bg p:last-of-type' ).fadeOut( 1000, 'swing');
    }
  });
  });

// 스크롤 이벤트에 따른 section 등장 효과
let observer = new IntersectionObserver((e)=>{
  e.forEach((박스)=>{
    if(박스.isIntersecting){
        박스.target.style.opacity = 1;
    } else {
      박스.target.style.opacity = 0;
    }
  })
})

let section = document.querySelectorAll('section > .box')
observer.observe(section[0])
observer.observe(section[1])
observer.observe(section[2])


