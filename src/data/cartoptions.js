//categorias
//1 🍔 Lanches
//2 🍕 Pizzas
//3 🥗 Porções
//4 🥟 Pasteis / Panquecas


export const cartoptions = [
    {id: 1 , title: 'Tamanho', description: 'Selecione um tamanho', category: 2, required: true, options: [
        {id: 1, title: 'Pequena', price: '18.00', isChecked: false},
        {id: 2, title: 'Média', price: '22.50', isChecked: true},
        {id: 3, title: 'Pequena', price: '26.80', isChecked: false},
    ]},
    {id: 2 , title: 'Adicionais', description: 'Selecione adicionais', category: 2, required: false, options: [
        {id: 4, title: 'Queijo', price: '3.00', isChecked: false},
        {id: 5, title: 'Bacon', price: '4,00', isChecked: false},
        {id: 6, title: 'Cheddar', price: '3.50', isChecked: false},
    ]},
    {id: 3 , title: 'Adicionais', description: 'Selecione adicionais', category: 1, required: false, options: [
        {id: 7, title: 'Maionese', price: '3.00', isChecked: false},
        {id: 8, title: 'Bacon', price: '4,00', isChecked: false},
        {id: 9, title: 'Fritas', price: '3.50', isChecked: false},
    ]},
]