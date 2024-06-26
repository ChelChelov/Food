'use strict';

import { getZero } from "./timer";

function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

	const slides = document.querySelectorAll(slide),
		  slider = document.querySelector(container),
		  prev = document.querySelector(prevArrow),
		  next = document.querySelector(nextArrow),
		  total = document.querySelector(totalCounter),
		  current = document.querySelector(currentCounter),
		  slidesWrapper = document.querySelector(wrapper),
		  slidesField = document.querySelector(field),
		  width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	total.innerHTML = getZero(slides.length);
	current.innerHTML = getZero(slideIndex);

	slidesField.style.width = 100 * slides.length +  '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => slide.style.width = width);

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		  dots = [];
	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);	
		dot.classList.add('dot');

		if (i == 0) {
			dot.style.opacity = 1;
		}

		indicators.append(dot);
		dots.push(dot);
	}

	function displayTargetDot(dotsArr) {
		dotsArr.forEach(dot => dot.style.opacity = '.5');
		dotsArr[slideIndex - 1].style.opacity = '1';
	}

	next.addEventListener('click', () => {
		if (offset == parseFloat(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += parseFloat(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		current.innerHTML = getZero(slideIndex);
		displayTargetDot(dots);
	});

	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = parseFloat(width) * (slides.length - 1);
		} else {
			offset -= parseFloat(width);
		}
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		current.innerHTML = getZero(slideIndex);
		displayTargetDot(dots);
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = parseFloat(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			current.innerHTML = getZero(slideIndex);
			displayTargetDot(dots);
		});
	});
}

export default slider;