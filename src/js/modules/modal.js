'use strict';

function modal() {
	//Modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		  modalWindow = document.querySelector('.modal');
	
	function openModal() {
		modalWindow.classList.add('show');
		modalWindow.classList.remove('hide');
		document.body.style.overflow = 'hidden'; //it'll fixate all the document; user can't scroll the page
		clearInterval(modalTimerId);
	}

	modalTrigger.forEach(trigger => {
		trigger.addEventListener('click', openModal);
	});

	function closeModal() {
		modalWindow.classList.add('hide');
		modalWindow.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow || e.target.getAttribute(['data-close']) == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 55000);

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

export default modal;