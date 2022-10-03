let tabsItem = Array.from(document.querySelector('.tabs-item').children)
let tabs = document.querySelectorAll('.tabs')
let count = 0;
(function () {
    tabs.forEach(el => {
        el.id = `num-${count}`
        count++
    })
    count = 0
    // tabs.forEach(el => el.classList.add('showDiw'))
    tabsItem.forEach(el => {
        el.dataset.num = 'num-' + count
        count++
    })
})()
tabsItem.forEach(el => {
    el.addEventListener('click', addClass)

    function addClass() {
        tabsItem.forEach(el => {
            el.classList.remove('active-tab')
            el.style.backgroundColor = '#F8FCFE'
        })
        el.classList.add('active-tab')
        el.style.backgroundColor = '#18CFAB'

    }
})
tabsItem.forEach(el => {
    el.addEventListener('click', showDiv)

    function showDiv() {
        tabs.forEach(el => el.classList.remove('showDiw'))

        let dataElement = el.dataset.num
        console.log(dataElement);
        let idEl = document.getElementById(dataElement)

        idEl.classList.add('showDiw')
    }
})
tabsItem[0].classList.add('active-tab')
tabsItem[0].style.backgroundColor = '#18CFAB'
// ==========================++==================
let ourButtons = Array.from(document.querySelector('.our_amazing_work__items').children)
let loadMore = document.querySelector('#load_more')
let imgBlock = Array.from(document.querySelector('.our_images').children)
ourButtons.forEach(el => {
    el.addEventListener('click', function () {
        ourButtons.forEach(el => el.style.border = '1px solid #DADADA')
        el.style.border = '2px solid #18CFAB'
    })
})





loadMore.addEventListener('click', function () {
    document.querySelector('.middle').classList.remove('display_none');
    loadMore.style.display = 'none';
    setTimeout(() => {
        imgBlock.forEach(el => el.hidden = false)
        document.querySelector('.middle').classList.add('display_none');
    }, 2000);
    
})




let all = document.querySelector('.all')
all.addEventListener('click', function () {
    imgBlock.forEach(el => {
        el.hidden = false
    })
    loadMore.style.display = 'none';
})

let grDesign = document.querySelector('.Graphic_Design_btn')
grDesign.addEventListener('click', function () {
    imgBlock.forEach(el => {
        if (el.className !== 'image_backside Graphic_Design') {
            el.hidden = true
        } else {
            el.hidden = false
        }
    })
    loadMore.style.display = 'none';
})
let webDesign = document.querySelector('.web_design_btn')
webDesign.addEventListener('click', function () {
    imgBlock.forEach(el => {
        if (el.className !== 'image_backside web_design') {
            el.hidden = true
        } else {
            el.hidden = false
        }
    })
    loadMore.style.display = 'none';
})
let landingPadeBtn = document.querySelector('.landing_pade_btn')
landingPadeBtn.addEventListener('click', function () {
    imgBlock.forEach(el => {
        if (el.className !== 'image_backside landing_pade') {
            el.hidden = true
        } else {
            el.hidden = false
        }
    })
    loadMore.style.display = 'none';
})
let wordpress_btn = document.querySelector('.wordpress_btn')
wordpress_btn.addEventListener('click', function () {
    imgBlock.forEach(el => {
        if (el.className !== 'image_backside wordpress') {
            el.hidden = true
        } else {
            el.hidden = false
        }
    })
    loadMore.style.display = 'none';
})

// ============================
// slider
// ============================

new Swiper('.swiper1', {
    keyboard: {
        enabled: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    thumbs: {
        swiper: {
            el: '.swiper_container_mini',
            slidesPerView: 4,
            spaceBetween: 3,
        }
    }
})
// ====================================
// Animation
// ====================================

