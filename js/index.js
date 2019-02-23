
class ServiceNav {
	constructor(service) {
		this.service = service;
		this.tabData = this.service.dataset.service;
		this.tabService = document.querySelector(`.tab-content[data-service='${service.dataset.service}']`);
		this.tabService = new TabContent(this.tabService);

		service.addEventListener('click', () => this.serviceClick());
	}

	serviceClick() {
		const tabs = document.querySelectorAll('.service');
		tabs.forEach(tab => tab.classList.remove('active-service'));

		const content = document.querySelectorAll('.tab-content');
 		content.forEach(content => content.style.display = 'none');

 		const select = document.querySelectorAll('.service');
 		Array.from(select).map(content => {})

 		this.service.classList.add('active-service');
		this.tabService.toggleContent();
	}
}

class TabContent {
	constructor(tab) {
		this.tab = tab;
	}

	toggleContent() {
		this.tab.style.display = "flex";
		this.tab.classList.toggle('toggle');
	}
}

class Menu {
	constructor(menu) {
		this.menu = menu;

		this.menu.addEventListener('click', () => {
			this.toggleMenu();
		})
	}

	toggleMenu() {
		let nav = document.querySelector('.nav-links');

		if(this.menu.getAttribute('src') === 'img/nav-hamburger.png') {
			this.menu.src = 'img/nav-hamburger-close.png';
		}
		else if(this.menu.getAttribute('src') === 'img/nav-hamburger-close.png') {
			this.menu.src = 'img/nav-hamburger.png';
		}

	}
}


var services = document.querySelectorAll('.service');
services = Array.from(services).map(service => new ServiceNav(service));
services[0].serviceClick();

var menu = document.querySelector('#hamburger');
menu = new Menu(menu);

// var navLinks = document.querySelector('.nav-links');
// navLinks.classList.toggle('toggle-nav');
// navLinks = new Link(navLinks);
