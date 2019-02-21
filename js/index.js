class ServiceNav {
	constructor(service) {
		this.tabService = document.querySelector(`.tab-content[data-service='${service.dataset.service}']`);

		this.tabService = new TabContent(this.tabService);

		service.addEventListener('click', () => this.serviceClick());
	}

	serviceClick() {
		this.tabService.toggleContent();
	}
}

class TabContent {
	constructor(tab) {
		this.tab = tab;
	}

	toggleContent() {
		this.tab.classList.toggle('toggle');
	}
}

const services = document.querySelectorAll('.service');
services.forEach(service => new ServiceNav(service));