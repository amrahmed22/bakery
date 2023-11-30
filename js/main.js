let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}



$(document).ready(function () {
    $('#loading .sk-cube-grid').fadeOut(1000, () => {
        $('#loading').fadeOut(1000, () => {
            $('body').css('overflow-y', 'auto')
        })
    });
});



// const scrollTop = function () {
//     const scrollBtn = document.createElement("button");
//     scrollBtn.innerHTML = "&uarr;";
//     scrollBtn.setAttribute("id", "scroll-btn");
//     document.body.appendChild(scrollBtn);
//   };
//   scrollTop();

    let scrollBtn = document.getElementById("scroll-btn");

  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.style.opacity = '100'
      : scrollBtn.style.opacity = '0'
  };
  window.addEventListener("scroll", scrollBtnDisplay);
