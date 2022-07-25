$(document).ready(function() {
    
    /* 배너 이미지 슬라이더 */
    const swiper = new Swiper('.slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
        el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
    
    /* 영화차트 탭메뉴 */
    const movBtn = $(".movie_title > ul > li");
    const movCont = $(".movie_chart > div");
    
    movCont.hide().eq(0).show();
    
    movBtn.click(function(e){
        e.preventDefault();
        const target = $(this);
        const index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display","none");
        movCont.eq(index).css("display","block");
    });
    
    //영화차트 이미지 슬라이드
    const swiper2 = new Swiper('.slider2', {
        slidesPerView: 4,
        spaceBetween: 24,
        /*mousewheel: {
            invert: true,
        },*/
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 5000,  
        },
        breakpoints: {
            960: {
            slidesPerView: 3,
            spaceBetween: 24
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 24
            },
            600: {
            slidesPerView: 1.4,
            spaceBetween: 24
            },
        },
    });
    
    
    
    
    //공지사항 탭메뉴
   /* var tabMenu = $('.notice');
    
    //컨텐츠 내용을 숨겨주세요!
    tabMenu.find('ul>li>ul').hide();
    tabMenu.find('li.active>ul').show();
    
    function tabList(e) {
        e.preventDefault(); //# 기능 차단
        var target = $(this); target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
        //버튼을 클릭하면 ~ul을 보여주고
        //부모의 li태그에 클래스 추가
        //형제의 li태그에 클래스 제거
        //제거한 자식의 ul태그를 숨겨줌
    }
    tabMenu.find('ul>li>a').click(tabList);*/
    
    
    var tabMenu = $('.notice');
    tabMenu.find('ul>li>ul').hide();
    tabMenu.find('ul>li.active ul').show();
    
    
    function tabList(e) {
        e.preventDefault();
        
        var target = $(this);
        target.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
        
        
    }
    
    tabMenu.find('ul>li>a').click(tabList).focus(tabList);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});