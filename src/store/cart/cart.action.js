import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen = (bool) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const setCartItems = (cartItems) =>
	createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

const addCartItem = (cart, prodToAdd) => {
	const { id } = prodToAdd;
	let found = false;

	cart = cart.map((item) => {
		if (item.id === id) {
			item.quantity++;
			found = true;
		}
		return item;
	});

	if (!found) return [...cart, { ...prodToAdd, quantity: 1 }];

	return cart;
};

const decreaseCartItem = (cart, prodToDecrease) => {
	const { id } = prodToDecrease;
	let newCart = [];
	let remove = false;

	cart.forEach((item) => {
		if (item.id === id) {
			item.quantity > 1 ? item.quantity-- : (remove = true);
		}
		newCart.push(item);
	});
	if (remove) return removeCartItem(cart, prodToDecrease);
	return newCart;
};

const removeCartItem = (cart, prodToRemove) => {
	const { id } = prodToRemove;
	const newCart = cart.filter((item) => item.id !== id);

	return newCart;
};

export const addItemToCart = (cartItems, prodToAdd) => {
	const newCartItems = addCartItem(cartItems, prodToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const decreaseItemQuantity = (cartItems, prodToDecrease) => {
	const newCartItems = decreaseCartItem(cartItems, prodToDecrease);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, prodToRemove) => {
	const newCartItems = removeCartItem(cartItems, prodToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
