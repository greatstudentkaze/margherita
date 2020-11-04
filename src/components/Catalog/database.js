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
			name: 'Ланчбокс с крыльями барбекю',
			img: 'img/catalog/lunchbox_with_bbq_wings.jpeg',
			id: 1,
			price: 290,
			choices: ['картофель фри', 'картофель по-деревенски', 'без соуса барбекю']
		},
		{
			name: 'Картофельные оладьи, 8 шт',
			img: 'img/catalog/potato_pancakes.jpeg',
			id: 2,
			price: 200,
		},
		{
			name: 'Куриные крылья',
			img: 'img/catalog/chicken_wings.jpeg',
			id: 3,
			price: 320,
		},
		{
			name: 'Картофель Фри',
			img: 'img/catalog/french_fries.jpeg',
			id: 4,
			price: 180,
		},
		{
			name: 'Сок Rich Яблоко, 1 л',
			img: 'img/catalog/rich_apple_juice.jpeg',
			id: 5,
			price: 140,
			choices: ['в графине', 'в пакете']
		},
		{
			name: 'BonAqua, 0.5 л',
			img: 'img/catalog/bonaqua.jpg',
			id: 6,
			price: 55,
			choices: ['негазированная', 'газированная']
		},
		{
			name: 'Coca-Cola, 0.5 л',
			img: 'img/catalog/coca_cola.jpg',
			id: 7,
			price: 90,
			choices: ['в стакане', 'в бутылке']
		},
		{
			name: 'Coca-Cola Vanilla, 0.5 л',
			img: 'img/catalog/coca_cola_vanilla.jpeg',
			id: 8,
			price: 90,
			choices: ['в стакане', 'в бутылке']
		},
		{
			name: 'Sprite, 0.5 л',
			img: 'img/catalog/sprite.jpg',
			id: 9,
			price: 90,
			choices: ['в стакане', 'в бутылке']
		},
		{
			name: 'Fanta, 0.5 л',
			img: 'img/catalog/fanta.jpg',
			id: 10,
			price: 90,
			choices: ['в стакане', 'в бутылке']
		},
	]
};

export default database;
