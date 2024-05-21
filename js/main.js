//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

//hbutton
const hbtn =document.querySelector('.p-hbutton');
const gnav =document.querySelector('.p-gnav');
const gnavUl =document.querySelector('.p-gnav-ul');

console.log(hbtn);
console.log(gnav);
console.log(gnavUl);

hbtn.addEventListener('click',()=>{
  hbtn.classList.toggle('is-active');
  gnav.classList.toggle('is-active');
  gnavUl.classList.toggle('is-active');
});

//liクリック時
gnav.addEventListener('click',()=>{
  hbtn.classList.remove('is-active');
  gnav.classList.remove('is-active');
  gnavUl.classList.remove('is-active');
});

//リサイズ
document.addEventListener('DOMContentLoaded', function(){
  //条件分岐の判断に利用するメディアクエリを指定
  const mq=window.matchMedia("(min-width:1025px)");
  //メディアクエリをチェックする関数を定義して実行
  function mqCheck(mq){
      //if PCサイズ（１０２５px以上の場合）
      if(mq.matches){
          hbtn.classList.remove('is-active');
          gnav.classList.remove('is-active');
          gnavUl.classList.remove('is-active');
      }else{
          //else tabサイズ以下（１０２４px以下の場合）
      }  
  }
  mqCheck(mq);
  // MediaQueryListが持つ情報が変更された場合に、定義した関数を実行
  mq.addEventListener('change', mqCheck, false);
}, false);

//tophead animation
const title= document.querySelector('.p-site-title');

const keyframes = {
  opacity:[0,0.8],
  translate:['0 50px',0],
};
const options = {
  duration:2000,
  easing:'ease',
};

title.animate(keyframes,options);
