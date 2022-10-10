import profile from '../assets/images/profile.jpg';
import bg from '../assets/images/bg.jpg';

import h1 from '../assets/images/h1.jpg';
import h2 from '../assets/images/h2.jpg';
import h3 from '../assets/images/h3.jpg';
import h4 from '../assets/images/h4.jpg';
import h5 from '../assets/images/h5.jpg';
import h6 from '../assets/images/h6.jpg';
import h7 from '../assets/images/h7.jpg';

import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';

export const braianbar = [
    {
        id: 1,
        name: `Braia'n bar`,
        profileImage: profile,
        backgroundImage: bg,
        categories: [
            {id: 1, name: '🍔 Lanches'},
            {id: 2, name: '🍕 Pizzas'},
            {id: 3, name: '🥗 Porções'},
            {id: 4, name: '🥟 Pasteis / Panquecas'},
        ],
        products: [
            {id: 1, categoryId: 1, name: 'Hamburguer 01', image: h1, description: 'Pão, Carne de hambúrguer, bacon, molho barbecue, maionese, alface, tomate e batata frita', price: '20.00'},
            {id: 2, categoryId: 1, name: 'Hamburguer 02', image: h2, description: 'Pão, duas carnes de Hambúrguer, alface e tomate', price: '22.50'},
            {id: 3, categoryId: 1, name: 'Hamburguer 03', image: h3, description: 'Pão, queijo, presunto, carne de hambúrguer, alface e tomate', price: '22.00'},
            {id: 4, categoryId: 1, name: 'Hamburguer 04', image: h4, description: 'Pizza de frango com batata palha e milho', price: '22.75'},
            {id: 5, categoryId: 1, name: 'Hamburguer 05', image: h5, description: 'Pizza de frango com batata palha e milho', price: '22.00'},
            {id: 6, categoryId: 1, name: 'Hamburguer 06', image: h6, description: 'Pizza de frango com batata palha e milho', price: '22.00'},
            {id: 7, categoryId: 1, name: 'Hamburguer 07', image: h7, description: 'Pizza de frango com batata palha e milho', price: '22.00'},

            {id: 8, categoryId: 2, name: 'Pizza de calabresa', image: p1, description: 'Pizza de calabresa', price: '32.00'},
            {id: 9, categoryId: 2, name: 'Pizza de frango', image: p2, description: 'Pizza de frango', price: '30.00'},
            {id: 10, categoryId: 2, name: 'Pizza de chocolate', image: p3, description: 'Pizza de chocolate', price: '30.00'},
        ]
    }
]