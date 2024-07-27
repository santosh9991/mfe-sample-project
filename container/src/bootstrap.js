import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';
productMount(document.querySelector('#products-dev'));
cartMount(document.querySelector('#cart-dev'))

console.log('Container')