export { welcome };
function welcome() {
	function component(className, text = '', elem = 'div') {
		const element = document.createElement(`${elem}`);
		element.className = `${className}`;
		element.textContent = `${text}`;
		return element;
	}

	const container = document.getElementById('content');

	const fragment = document.createDocumentFragment();
	const div = fragment
		.appendChild(component('header'))
		.appendChild(component('title', 'MOUNTAIN HOUSE'));

	container.appendChild(fragment);

	container.appendChild(component('main'));

	const fragment2 = document.createDocumentFragment();
	const div2 = fragment2
		.appendChild(component('footer'))
		.appendChild(component('btn-container'))
		.appendChild(component('welcome', 'Welcome'));
	container.appendChild(fragment2);

	const btnContainer = document.querySelector(
		'#content > div.footer > div'
	);

	btnContainer.appendChild(component('menu', 'Menu'));
	btnContainer.appendChild(component('contact', 'Contact'));
}
