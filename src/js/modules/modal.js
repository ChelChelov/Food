'use strict';

function openModal(modalSelector, modalTimerId) {
	const modalWindow = document.querySelector(modalSelector);
	modalWindow.classList.add('show');
	modalWindow.classList.remove('hide');
	document.body.style.overflow = 'hidden'; //it'll fixate all the document; user can't scroll the page
	
	console.log(modalTimerId);
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modalWindow = document.querySelector(modalSelector);
	modalWindow.classList.add('hide');
	modalWindow.classList.remove('show');
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

	const modalTrigger = document.querySelectorAll(triggerSelector),
		  modalWindow = document.querySelector(modalSelector);
	
	modalTrigger.forEach(trigger => {
		trigger.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow || e.target.getAttribute(['data-close']) == '') {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};