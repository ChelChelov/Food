'use strict';

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

	const tabs = document.querySelectorAll(tabsSelector),
		  tabsContent = document.querySelectorAll(tabsContentSelector),
		  tabsParent = document.querySelector(tabsParentSelector);

	// Function to hide <div class="tabcontent"> and <div class="tabheader__item">
	function hideTabContent () {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}	
	// Function to show <div class="tabcontent"> and <div class="tabheader__item"> by it's index
	function showTabContent (i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	//Delegated eventListener for <div class="tabheader__item"> to show choosen one tab and tabcontent
	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;