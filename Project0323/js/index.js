'use strict';
const header=document.querySelector('.header');

window.addEventListener('scroll',(e)=>{
  
  // console.log(e.type, '<<' );
  // console.log(window.scrollY, '<<' );
  // console.log(document.documentElement.scrollTop, '<<' );

  const wScrollTop=window.scrollY;
  if(wScrollTop>60){
    //header 배경색 횐색으로 빠구
    // header.style.backgroundColor='#00ffff';
    // header.style.boxShadow='0 2px 2px #555';
    // header.style.padding='5px 0';
    header.classList.add('headerOn');

  }else{
    // header.style.backgroundColor='rgba(209, 233, 255, 0.562)';
    header.classList.remove('headerOn');
  }

});

//이벤트 위임, 이벤트 객체, preventDefault, DOM
const section=document.querySelectorAll('.section');
const scrollBtnUl=document.querySelector('.scroll-btn>ul');
const scrollBtnUlLi=document.querySelectorAll('.scroll-btn>ul>li');

scrollBtnUl.addEventListener('click', (e)=>{

  e.preventDefault();
  const eTarget=e.target;
  scrollBtnUlLi.forEach((el, idx)=>{
    if(el===eTarget){
      const sTop=section[idx].offsetTop;
      console.log(`sTop -> ${sTop}`);
      window.scroll({ top: sTop, left: 0, behavior: 'smooth'});
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  });
});
