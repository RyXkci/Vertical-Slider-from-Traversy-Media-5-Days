const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const slidesLength = slideRight.querySelectorAll('div').length;
const mediaQuery = window.matchMedia('(min-width: 768px)');



let activeSlideIndex = 0;

if (mediaQuery.matches) {
    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
} else {
    slideLeft.style.width = `${slidesLength * 100}%`
    slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`
}

//                      DESKTOP SLIDER                     //


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

rightButton.addEventListener('click', () => changeSliderMobile('right'))
leftButton.addEventListener('click', () => changeSlide('left'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

//                     MOBILE SLIDER                       //


const sliderHeight = sliderContainer.clientHeight;
const mobileHeightPercentage = (sliderHeight * 15) / 100;

console.log(mobileHeightPercentage)

const changeSliderMobile = (direction) => {
    const sliderHeight = sliderContainer.clientWidth
    if (direction === 'right') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'left') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * (sliderContainer.clientHeight - mobileHeightPercentage)}px)`
    slideLeft.style.transform = `translateX(${activeSlideIndex * sliderHeight}px)`
    console.log(sliderContainer.clientHeight);
}
