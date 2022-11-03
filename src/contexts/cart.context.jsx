import { useReducer } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	cartTotal: 0,
	reduceItemQuantity: () => {},
	removeItemFromCart: () => {},
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};
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

const reduceCartItem = (cart, prodToReduce) => {
	const { id } = prodToReduce;
	let newCart = [];
	let remove = false;

	cart.forEach((item) => {
		if (item.id === id) {
			item.quantity > 1 ? item.quantity-- : (remove = true);
		}
		newCart.push(item);
	});
	if (remove) return removeCartItem(cart, prodToReduce);
	return newCart;
};

const removeCartItem = (cart, prodToRemove) => {
	const { id } = prodToRemove;
	const newCart = cart.filter((item) => item.id !== id);

	return newCart;
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`unhandled type of ${type} in cartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);
		const newCartTotal = newCartItems.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			},
		});
	};

	const addItemToCart = (prodToAdd) => {
		const newCartItems = addCartItem(cartItems, prodToAdd);
		updateCartItemsReducer(newCartItems);
	};
	const reduceItemQuantity = (prodToReduce) => {
		const newCartItems = reduceCartItem(cartItems, prodToReduce);
		updateCartItemsReducer(newCartItems);
	};
	const removeItemFromCart = (prodToRemove) => {
		const newCartItems = removeCartItem(cartItems, prodToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const setIsCartOpen = (bool) => {
		dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
		cartTotal,
		reduceItemQuantity,
		removeItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
