const badgeEl = document.querySelector('header .badges');
// 오른쪽 사이드 카드 일정 높이 넘어가면 숨김처리
window.addEventListener('scroll', _.throttle(function(){
    console.log("scroll!");
    if(window.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        // badgeEl.style.display = 'none';
        //버튼 보이기
        gsap.to('#to-top', .2, {
            x : 0
        })

    } else{
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
        // badgeEl.style.display = 'block';
        // 버튼 숨기기
        gsap.to('#to-top', .2, {
            x : 100
        });
    }
}, 300));
// _.throttle(함수,시간)

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo : 0
    });
})


// 천천히 나타나게 하는 애니메이션?
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl, 1,{
        delay: (index + 1) * .7,
        opacity : 1
    });
});

// 공지사항 swiper
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
    direction  : "vertical",
    autoplay : true,
    loop : true
});

// promotion swiper
new Swiper(".promotion .swiper-container", {
    // direction : 'horizontal' << 기본으로 들어가 있음
    slidesPerView : 3,  // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides : true,  // 1번 슬라이드가 가운데에 보이기
    loop : true,
    autoplay : {
        delay : 3000
    },
    pagination : {
        el : '.promotion .swiper-pagination',   // 페이지 번호 요소 선택자
        clickable : true, // 사용자의 페이지 번호 요소 제어
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
}); 

// Awards Slide
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,   // 한번에 보여줄 슬라이드 개수
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})

// toggle-promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else{
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// floatingObject
function floatingObject(selector, delay, size) {
    // gsap.to(요소,시간,옵션);
    gsap.to(
        selector,   //선택자
        random(1.5, 2.5),   // 애니메이션 동작 시간
    {   // 옵션
        y: 20,
        repeat : -1, // 반복
        yoyo: true,  // 다시 뒤로 재생을해서 다시 돌아갈 수 있게 하는 것
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

/* ScrollMagic 라이브러리 */
// 스크롤에 따라 천천히 나타나는 것 
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
            triggerHook : .8        
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})

