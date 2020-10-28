const database = {
	pizzas: [
		{
			name: 'Сырная',
			img: 'img/catalog/cheese.jpg',
			id: 1,
			category: 'pizza',
			price: 249,
			toppings: ['бекон', 'цыпленок', 'брынза'],
		},
		{
			name: 'Сырный цыпленок',
			img: 'img/catalog/cheese_chicken.jpg',
			id: 2,
			category: 'pizza',
			price: 389,
			toppings: ['сыр моцарелла', 'острый халапеньо', 'чеддер и пармезан'],
		},
		{
			name: 'Пепперони',
			img: 'img/catalog/pepperoni.jpg',
			id: 3,
			category: 'pizza',
			price: 399,
			toppings: ['острый халапеньо', 'сыр блю чиз', 'грибы'],
		},
		{
			name: 'Карбонара',
			img: 'img/catalog/carbonara.jpeg',
			id: 4,
			category: 'pizza',
			price: 449,
			toppings: ['острый халапеньо', 'бекон', 'цыпленок'],
		},
		{
			name: 'Четыре сыра',
			img: 'img/catalog/four_cheeses.jpg',
			id: 5,
			category: 'pizza',
			price: 429,
			toppings: ['ветчина', 'цыпленок', 'брынза'],
		},
		{
			name: 'Цыпленок барбекю',
			img: 'img/catalog/bbq_chicken.jpg',
			id: 6,
			category: 'pizza',
			price: 499,
			toppings: ['сыр моцарелла', 'острый халапеньо', 'чеддер и пармезан'],
		},
	],
	other: [
		{
			name: 'Coka',
			img: 'img/catalog/soda.png',
			id: 1,
			price: 50,
			choices: ['Coca-cola', 'Fanta', 'Mirinda', 'Sprite'],
		},
		{
			name: 'Чайкофф',
			img: 'img/catalog/tea.png',
			id: 2,
			price: 70,
			choices: ['Черный', 'Зеленый'],
		},
		{
			name: 'Лукошко Фри',
			img: 'img/catalog/french-fries.png',
			id: 3,
			price: 75,
		},
		{
			name: 'Нагиевцы',
			img: 'img/catalog/nuggets.png',
			id: 4,
			price: 100,
			choices: ['Филе', 'Крылья'],
		},
		{
			name: 'Кофе',
			img: 'img/catalog/coffee.png',
			id: 5,
			price: 150,
			choices: ['Эспрессо', 'Капучино'],
		},
		{
			name: 'Гринч',
			img: 'img/catalog/green-coffee.png',
			id: 6,
			price: 175.25
		},
	]
};

export default database;
