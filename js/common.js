// 검색 Element
const searchEl = document.querySelector('.search');

// Input Element
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});





// 올해가 몇년인지 > Footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 올해 연도