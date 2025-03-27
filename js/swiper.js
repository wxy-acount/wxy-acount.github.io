let mySwiper = new Swiper ('.swiper', {
//  direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    speed:1000, //切换速度ms
//  autoplay:true,  等同下一同名部分
//  autoplay: {
//  delay: 500,
//  stopOnLastSlide: false,
//  disableOnInteraction: true,},//自动切换

//  设置Slide的切换效果，默认为"slide"（普通位移切换），还可设置为"fade"（淡入）、"cube"（方块）、"coverflow"（3d流）、"flip"（3d翻转）、"cards"(卡片式)、"creative"（创意性）。切换效果
	effect:'cube',
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable:true,
    },
  })        