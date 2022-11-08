import { welcome } from './welcome.js';
import { contact } from './contact.js';
import { menuPage as menu } from './menu.js';
import './style.css';

const container = document.getElementById('content');

/* const buttons = document.querySelectorAll(
	'#content > div.footer > div > div'
); */

welcome();
refreshButtons();

function refreshButtons() {
	const buttons = document.querySelectorAll(
		'#content > div.footer > div > div'
	);

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			managePageLoads(e);
		});
	});
}
function changePage(e) {
	return e.target.classList[0];
}

function clearPage(cont = container) {
	return cont.replaceChildren();
}

function managePageLoads(e, btnClick = changePage(e)) {
	if (btnClick === 'welcome') {
		clearPage();
		welcome();
		refreshButtons();
		console.log('show page welcome');
	}
	if (btnClick === 'menu') {
		clearPage();
		menu();
		refreshButtons();
		console.log('show page menu');
	}
	if (btnClick === 'contact') {
		clearPage();
		contact();
		refreshButtons();
		console.log('show page contact');
	}
}
