import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
