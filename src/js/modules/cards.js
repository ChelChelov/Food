'use strict';

import { getResource } from "../services/services";

function cards() {
	//Menu-item class for cards

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

	//Then-method to rendering cards into the index.html
	getResource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({img, altimg, title, descr, price}) => {
				new MenuItem(img, altimg, title, descr, price, '.menu__field .container').render()
			});
		});
	
}

export default cards;