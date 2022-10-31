import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	totalQuantity: 0,
	reduceItemQuantity: () => {},
	removeItemFromCart: () => {},
});

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

const countTotal = (cart) => {
	return cart.reduce((total, item) => total + item.quantity, 0);
};

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);

	useEffect(() => {
		setTotalQuantity(countTotal(cartItems));
	}, [cartItems]);

	const addItemToCart = (prodToAdd) => {
		setCartItems(addCartItem(cartItems, prodToAdd));
	};
	const reduceItemQuantity = (prodToReduce) => {
		setCartItems(reduceCartItem(cartItems, prodToReduce));
	};
	const removeItemFromCart = (prodToRemove) => {
		setCartItems(removeCartItem(cartItems, prodToRemove));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		totalQuantity,
		reduceItemQuantity,
		removeItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
