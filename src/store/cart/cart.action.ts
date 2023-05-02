import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { CategoryItem } from '../categories/category.types';
import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';

const addCartItem = (cart: CartItem[], prodToAdd: CategoryItem): CartItem[] => {
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

const decreaseCartItem = (
	cart: CartItem[],
	prodToDecrease: CartItem
): CartItem[] => {
	const { id } = prodToDecrease;
	let newCart: CartItem[] = [];
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

const removeCartItem = (cart: CartItem[], prodToRemove: CartItem) => {
	const { id } = prodToRemove;
	const newCart = cart.filter((item) => item.id !== id);

	return newCart;
};

export type SetIsCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_IS_CART_OPEN,
	boolean
>;

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

export const setIsCartOpen = withMatcher(
	(bool: boolean): SetIsCartOpen =>
		createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
);

export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
	cartItems: CartItem[],
	prodToAdd: CategoryItem
) => {
	const newCartItems = addCartItem(cartItems, prodToAdd);
	return setCartItems(newCartItems);
};
export const decreaseItemQuantity = (
	cartItems: CartItem[],
	prodToDecrease: CartItem
) => {
	const newCartItems = decreaseCartItem(cartItems, prodToDecrease);
	return setCartItems(newCartItems);
};
export const removeItemFromCart = (
	cartItems: CartItem[],
	prodToRemove: CartItem
) => {
	const newCartItems = removeCartItem(cartItems, prodToRemove);
	return setCartItems(newCartItems);
};
