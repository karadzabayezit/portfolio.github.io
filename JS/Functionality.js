// ############  VARIABLES  ########################################
const homePage = document.querySelector('#home');
let sidebar = document.querySelector('.sidebar');
let toStart = document.querySelector('#fastToStart');
let aboutHeaderElement = document.querySelectorAll('.underline');
let scrollTopForFirstFunc = false;
let scrollTopForSecondFunc = false;
let isTypeWriterFuncCalled = false;
let typeWriter = document.querySelector('.typewriter');
let typeWriterText = typeWriter.innerText;
let typeWriterTextSplitted = typeWriterText.split('');
typeWriter.innerText = '';
let i = 0;
let typeWriterCurrentText = '';

// ##################################################################


// ########  FUNCTIONS  #############################################
function show_hide_Sidebar(){ 
    if (scrollTopForSecondFunc) {
        sidebar.classList.add('_mobileV') ;
    }
    else {
        sidebar.classList.remove('_mobileV') ; 
    }; 
};

function show_toStart() {
    if (scrollTopForFirstFunc) {
        toStart.classList.add('show');
    }
    else {
        toStart.classList.remove('show');
    };
};

function move_headerElementUnderline() {
    if (scrollTopForSecondFunc) {
        aboutHeaderElement[1].classList.add('_active');
        aboutHeaderElement[0].classList.remove('_active');
    }
    else {
        aboutHeaderElement[1].classList.remove('_active');
        aboutHeaderElement[0].classList.add('_active');
    };
};

sidebar.addEventListener("click", e =>  {
    i = e.target.getAttribute('id')

    console.log(i)
    if ( i == 'instagram') {
        window.location.href = 'https://www.instagram.com/b.karajaew?igshid=MTNiYzNiMzkwZA==';
    }
    else if (i == 'github') {
        window.location.href = 'https://github.com/karadzabayezit'
    }
    else if (i == 'telegram') {
        window.location.href = 'http://tmstart.me/karadza_b'
    }
}); 




// ########  MOUSEMOVE  ################################################

    var O = document.getElementById('obj'),
    X = 0,
    Y = 0,
    mouseX=0,
    mouseY=0;
        window.addEventListener('mousemove', function (ev) {
            ev = window.event || ev;
            X=ev.pageX;
            Y=ev.pageY;
        });
        if (homePage.offsetWidth > 432) {
            function move() {
                var p = 'px';
                O.style.left = X +p;
                O.style.top = Y +  p;
     
                setTimeout(move, 1);
            }
            move();
        }   

// ######################################################################


// ################  TypeWriter  ########################################
function typeWriterFunc() {
    if(!isTypeWriterFuncCalled) {
        const typeWriterInterval = setInterval(() => {
            let currentLetter = typeWriterTextSplitted[i]
            i ++
            typeWriterCurrentText = typeWriterCurrentText + currentLetter
            typeWriter.innerHTML = typeWriterCurrentText
            if (i == typeWriterTextSplitted.length){
                clearInterval(typeWriterInterval)
            }
        }, 60);
    }
    isTypeWriterFuncCalled = true
}
//############################################################################


console.log(document.documentElement)
console.log(document.body)


// ##############  ONSCROLL FUNCTION  ########################################
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    scrollTopForFirstFunc = document.body.scrollTop > ( homePage.offsetHeight - 410 ) || document.documentElement.scrollTop > ( homePage.offsetHeight - 410 )
    scrollTopForSecondFunc = document.body.scrollTop > ( homePage.offsetHeight - 200 ) || document.documentElement.scrollTop > ( homePage.offsetHeight - 200 )

    if (document.body.scrollTop > ( homePage.offsetHeight - 410 ) || document.documentElement.scrollTop > ( homePage.offsetHeight - 410 )){
        typeWriterFunc()
        show_toStart()
    }
    else {show_toStart()}
    if (document.body.scrollTop > ( homePage.offsetHeight - 200 ) || document.documentElement.scrollTop > ( homePage.offsetHeight - 200 )) {
        move_headerElementUnderline()
        show_hide_Sidebar()
    } else {
        move_headerElementUnderline()
        show_hide_Sidebar()
    }  
};
// #############################################################################


// ##############  EVENTS  #####################################################
// let headerElementsContainer = document.querySelector('.about__header-elements-container');
document.addEventListener('click', function(event) {
    let element = event.target.closest('.about__header-element');
    if (event.target.classList[0] == 'go-ahead-button-b' || event.target.classList[1] == 'fa-chevron-down') {
        let toGo = document.querySelector('#about');
        toGo.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'    
        })
    }
    else if (event.target.classList[1] == 'fa-chevron-circle-up'){
        let toGo = document.querySelector('#home');
        toGo.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'    
        })
    }
    else if (event.target.classList[1] == 'fa-chevron-circle-down'){
        let toGo = document.querySelector('#contact');
        toGo.scrollIntoView({
            block: 'start',
            inline: 'start',
            behavior: 'smooth'    
        })
    }
    else if (element == event.target) {
        let toGo = document.querySelector('#' + element.innerText.toLowerCase())
            toGo.scrollIntoView({
                block: 'start',
                inline: 'start',
                behavior: 'smooth'    
            })
        }
});








    
