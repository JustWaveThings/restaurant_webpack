import scramble from './img/scramble.png';
import scrambleEgg from './img/scrambledegg.png';
import padthai from './img/padthai.png';
import mintchoc from './img/mintchocchip.png';
import chickmashpot from './img/chickmashpotato.png';
export { menuPage };

function menuPage() {
	function component(className, text = '', elem = 'div') {
		const element = document.createElement(`${elem}`);
		element.className = `${className}`;
		element.textContent = `${text}`;
		return element;
	}

	function imageComponent(
		img = scramble,
		alt = 'Freeze dried hiking food',
		className = 'image'
	) {
		const image = document.createElement('img');
		image.className = `${className}`;
		image.src = `${img}`;
		image.alt = `${alt}`;
		return image;
	}

	const container = document.getElementById('content');

	const fragment = document.createDocumentFragment();
	const div = fragment
		.appendChild(component('header'))
		.appendChild(component('title', 'MOUNTAIN HOUSE'));

	container.appendChild(fragment);

	container.appendChild(component('main'));

	const mainContainer = document.querySelector('#content > div.main');

	/* mainContainer.appendChild(component('product-container')); */

	/* const productContainer = document.querySelector(
    '#content > div.main > div.product-container'
  ); */

	const productList = [
		scramble,
		scrambleEgg,
		padthai,
		mintchoc,
		chickmashpot,
	];

	productList.forEach((element) => {
		mainContainer
			.appendChild(component('product-container'))
			.appendChild(imageComponent(element))
			.insertAdjacentElement(
				'afterend',
				component(
					'copy',
					' laoreet rhoncus. Maecenas sed blandit nunc, a iaculis mauris. Vivamus suscipit mauris libero, mollis gravida massa tincidunt at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam justo tortor, lobortis sit amet felis ut, mollis interdum nibh. Ut pulvinar -- 8.99'
				)
			);
	});

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
