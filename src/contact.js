export { component };

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

const mainContainer = document.querySelector('#content > div.main');

mainContainer.appendChild(
	component('contact-header', "We'd love to hear from you!")
);
mainContainer.appendChild(
	component(
		'contact-body',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim, nibh eget hendrerit elementum, magna arcu commodo magna, et lobortis lacus magna nec leo. Ut sodales magna libero, vitae efficitur massa aliquet in. Nulla interdum euismod odio, eget finibus lectus congue a. Cras quis vestibulum nibh, a tristique nunc. Mauris ut quam sapien. Phasellus convallis est quis sapien imperdiet molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec finibus neque, id efficitur mi. Pellentesque feugiat lobortis mauris ac fringilla. Pellentesque euismod nibh in est placerat sollicitudin.'
	)
);

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
