const formElem = document.forms[0];
const wordsList = [
	{
		word: 'Крокодил',
		translation: 'Crocodile',
		color: '#4cd137'
	},
	{
		word: 'Фламинго',
		translation: 'Flamingo',
		color: '#f368e0'
	},
	{
		word: 'Дверь',
		translation: 'Door',
		color: '#cd6133'
	}
];
const wordsContainerElem = document.querySelector('#words');
const searchElem = document.querySelector('#search');

function render(list) {
	wordsContainerElem.innerText = '';
	for (let cards = 0; cards < list.length; cards++) {
		const crossElem = document.createElement('div');
		const divWordElem = document.createElement('div');
		const pWordElem = document.createElement('p');
		crossElem.classList.add('cross');
		pWordElem.classList.add('active');
		const pTranslationElem = document.createElement('p');
		pWordElem.innerText = list[cards].word;
		pTranslationElem.innerText = list[cards].translation;
		divWordElem.style.backgroundColor = `${list[cards].color}`;
		divWordElem.appendChild(pWordElem);
		divWordElem.appendChild(pTranslationElem);
		divWordElem.appendChild(crossElem);
		wordsContainerElem.appendChild(divWordElem);

		divWordElem.addEventListener('dblclick', event => {
			if (pWordElem.className === 'active') {
				pWordElem.classList.remove('active');
				pTranslationElem.classList.add('active');
			} else {
				pTranslationElem.classList.remove('active');
				pWordElem.classList.add('active');
			}
		});

		crossElem.addEventListener('click', event => {
			wordsContainerElem.removeChild(divWordElem);
			list.splice(cards, 1);
			render(list);
		});
	}
}

formElem.addEventListener('submit', event => {
	event.preventDefault();
	const word = event.target.word.value;
	const translation = event.target.translation.value;
	const color = event.target.color.value;
	if (word !== '' && translation !== '' && color !== '') {
		wordsList.push({ word, translation, color });
	} else {
		alert('У вас есть незаполненное поле');
	}
	event.target.word.value = '';
	event.target.translation.value = '';
	event.target.color.value = '';
	render(wordsList);
})

searchElem.addEventListener('input', event => {
	const value = event.target.value;
	const result = wordsList.filter(elem => elem.word.startsWith(value) || elem.translation.startsWith(value));
	render(result);
});

render(wordsList);


