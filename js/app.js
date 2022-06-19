(function () {
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburger');

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');
                // console.log(subMenu.clientHeight);
                if (subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                }
                subMenu.style.height = `${height}px`;
            });
        });
    }
    addClick();


    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            deleteSty();
            if (list.classList.contains('.menu__links--show'))
                list.classList.remove('.menu__links--show');
        } else {
            addClick();
        }

        if (window.innerWidth <= 800) {
            addClick();
        }

        menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));
    });


    const deleteSty = () => {
        listElements.forEach(element => {
            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        })
    }



})();

// slider

const slider = document.querySelector(".hero__container");
const slider_one = document.querySelectorAll(".hero__slider");
let conta = 1;
let width;
const interval = 3000;

window.addEventListener('resize', animate_slider());

function animate_slider() {
    width = slider_one[0].clientWidth;
}


setInterval(function () {
    slides();
}, interval);
function slides() {
    animate_slider();
    slider.style.transform = `translate(-${width * conta}px)`;
    slider.style.transition = "transform .8s";
    conta++;
    if (conta == slider_one.length) {
        setTimeout(function () {
            slider.style.transform = `translate(0px)`;
            slider.style.transition = "transform 0s";
            conta = 1;
        }, 1500);
    }
}

