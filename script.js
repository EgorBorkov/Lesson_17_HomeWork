// lst.forEach((elem, index, arr) => console.log(elem, index, arr));
// ! Нашли четные элементы и вывели их индекс
// const lst = [12, 43, 58, 14, 9, 85, 33];
// lst.forEach((elem, index) => {
// 	if (elem % 2 === 0) {
// 		console.log(index);
// 	};
// });
// !
// ! Перевели все значения массива из строки в число
// const lst = ['12', '43', '58', '14', '9', '85', '33'];
// lst.forEach((elem, index, arr) => arr[index] = +elem);
// console.log(lst[0] + lst[1]);
// !
// ! пройти по масссиву и вывести мудули чисел (если отрицательное, то вывести положительное)
// const lst = [12, -43, 58, -14, -9, 85, 33];
// lst.forEach(elem => console.log((elem < 0) ? -elem : elem));
// !
// ! Метод Map. Возвращает массив
// const lst = [12, -43, 58, -14, -9, 85, 33];
// const lst2 = lst.map(elem => (elem < 0) ? -elem : elem)
// 	.map(elem => '' + elem)
// 	.map(elem => elem.length);
// console.log(lst2);
// !
// ! Создали массив из объектов, у которых в качестве ключа слово, а значение длинна
// const lst = ['Велосипед', 'Тренажер', 'Ноутбук', 'Телефон', 'Банан', 'Яйцо'];
// let lst2 = lst.map(elem => ({ [elem]: elem.length }));
// console.log(lst2);
// !
// ! Метод Filter. Вывели только целые числа. Выводит массив
// const lst = [12, -43, 58, -14, -9, 85, 33];
// let lst2 = lst.filter(elem => elem > 0);
// console.log(lst2);
// !
// ! Сформировать массив из слов короче 6 символов
// const lst = ['Велосипед', 'Тренажер', 'Ноутбук', 'Телефон', 'Банан', 'Яйцо'];
// let lst2 = lst.filter(elem => elem.length < 6);
// console.log(lst2);
// !
// ! Вытаскиваем объект из массива и фильтруем
// const lst = [
// 	{
// 		type: 'Велосипед',
// 		id: 1
// 	},
// 	{
// 		type: 'Тренажер',
// 		id: 2
// 	},
// 	{
// 		type: 'Ноутбук',
// 		id: 3
// 	},
// 	{
// 		type: 'Телефон',
// 		id: 4
// 	},
// 	{
// 		type: 'Банан',
// 		id: 5
// 	},
// 	{
// 		type: 'Яйцо',
// 		id: 6
// 	}
// ];
// let lst2 = lst.map(elem => elem.type)
// 	.filter(elem => elem.length < 6);
// console.log(lst2);
// !
// ! Метод Find вытаскивет еллемент по ключу и значению. Находит еллемент
// const lst = [
// 	{
// 		type: 'Велосипед',
// 		id: 1
// 	},
// 	{
// 		type: 'Тренажер',
// 		id: 2
// 	},
// 	{
// 		type: 'Ноутбук',
// 		id: 3
// 	},
// 	{
// 		type: 'Телефон',
// 		id: 4
// 	},
// 	{
// 		type: 'Банан',
// 		id: 5
// 	},
// 	{
// 		type: 'Яйцо',
// 		id: 6
// 	}
// ];
// console.log(lst.find(elem => elem.id === 3));
// console.log(lst.find(elem => elem.type === 'Телефон'));
// !
// ! Работаем с вёрской
// const pLst = document.querySelectorAll('#root p');	//! Это не маассив а итеррированный объект. Map не подходит
// ! Нужно перевести в массив
// let pLstMass = [...pLst];
// ! Перевели
// let texts = pLstMass.map(elem => elem.innerText);
// console.log(texts);
// ! вывели
// ? Присвоить элементу с текстом Серьги класс main. Найти элемент используя методы массивов (find)
// const [...pLst] = document.querySelectorAll('#root p');
// pLst.find(elem => elem.innerText === 'Серьги').classList.add('main');
// ? Готово
// ! Из слов в массиве создаем теги <p></p>. Создали инпут элемент по которому мы будем находить нужное значение
const rootElem = document.querySelector('#root');
const searchElem = document.querySelector('#search');
const todoList = ['Просунуться', 'Умыться', 'Позавтракать', 'Поработать', 'Пообедать', 'Поспасть'];

const ascendingButtonElem = document.querySelector('.ascending');
const descendingButtonElem = document.querySelector('.descending');

function render(list) {
	rootElem.innerText = '';
	rootElem.append(...list.map(elem => {
		const pElem = document.createElement('p')
		pElem.innerText = elem;
		return pElem;
	}));
}

searchElem.addEventListener('input', event => {
	const value = event.target.value;
	const lst = todoList.filter(elem => elem.startsWith(value));
	render(lst);
});

ascendingButtonElem.addEventListener('click', event => {
	console.log('ascending');
})

descendingButtonElem.addEventListener('click', event => {
	console.log('descending');
})

render(todoList);
// !
