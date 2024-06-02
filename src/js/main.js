'use strict';

const { data } = require("autoprefixer");

document.addEventListener('DOMContentLoaded', () => {

	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		  tabsContent = document.querySelectorAll('.tabcontent'),
		  tabsParent = document.querySelector('.tabheader__items');

	// Function to hide <div class="tabcontent"> and <div class="tabheader__item">
	function hideTabContent () {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}	
	// Function to show <div class="tabcontent"> and <div class="tabheader__item"> by it's index
	function showTabContent (i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	//Delegated eventListener for <div class="tabheader__item"> to show choosen one tab and tabcontent
	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	//Timer

	const deadLine = '2024-06-21';

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);
		}
			  
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			  days = timer.querySelector('#days'),
			  hours = timer.querySelector('#hours'),
			  minutes = timer.querySelector('#minutes'),
			  seconds = timer.querySelector('#seconds'),
			  timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadLine);	

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

	const modalTimerId = setTimeout(openModal, 15000);

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

	//Menu-item class

	class MenuItem {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
			this.transfer = 40;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const item = document.createElement('div');

			if (this.classes.length === 0) {
				this.item = 'menu__item';
				item.classList.add(this.item);
			} else {
				this.classes.forEach(className => item.classList.add(className));
			}

			item.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`; 
			this.parent.append(item);
		}
	}

	//Function to getting data from db
	const getResource = async url => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	};

	//Then-method to rendering cards into the index.html
	getResource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({img, altimg, title, descr, price}) => {
				new MenuItem(img, altimg, title, descr, price, '.menu__field .container').render()
			});
		});

	//Forms

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Thanks! We will contact with you soon!',
		failure: 'Oops... Something went wrong!'  
	};

	forms.forEach(form => bindPostData(form));

	//Function to connecting to the server
	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	};

	//Function to post data to db using forms
	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
				console.log(data);
				showThanksModal(message.success);
				statusMessage.remove();
			}).catch(() => {
				showThanksModal(message.failure);
			}).finally(() => {
				form.reset();
			});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModalWrapper = document.createElement('div');
		thanksModalWrapper.classList.add('modal__dialog');
		thanksModalWrapper.innerHTML = `
			<div class="modal__content">
				<div data-close class="modal__close">&times;</div>
				<div class="modal__title">${message}</div>
			</div>
		`;

		document.querySelector('.modal').append(thanksModalWrapper);
		setTimeout(() => {
			thanksModalWrapper.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	// fetch('http://localhost:3000/menu')
	// .then(data => data.json())
	// .then(res => console.log(res));
});