import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCartCount,
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import Button from '../../components/button/button.component';
import Modal from '../../components/modal/modal.component';
import { useNavigate } from 'react-router-dom';
import { setIsModalOpen, setModalType } from '../../store/modal/modal.action';
import {
	BackButton,
	CheckoutCartContainer,
	CheckoutContainer,
	CheckoutHeader,
	CheckoutItems,
	CheckoutMainHeader,
	FinalTotal,
	HeaderBlock,
	Total,
	TotalContainer,
	TotalTable,
	TotalTableRow,
} from './checkout.styles';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const openPayment = () => {
		dispatch(setModalType('payment'));
		dispatch(setIsModalOpen(true));
	};
	return (
		<>
			<Modal />
			<CheckoutContainer>
				<CheckoutCartContainer>
					<CheckoutMainHeader>
						<h1> Your cart ({cartCount} items)</h1>
					</CheckoutMainHeader>
					<CheckoutHeader>
						<HeaderBlock>
							<span>Product</span>
						</HeaderBlock>
						<HeaderBlock>
							<span>Description</span>
						</HeaderBlock>
						<HeaderBlock>
							<span>Quantity</span>
						</HeaderBlock>
						<HeaderBlock>
							<span>Price</span>
						</HeaderBlock>
						<HeaderBlock>
							<span>Remove</span>
						</HeaderBlock>
					</CheckoutHeader>

					{cartCount ? (
						<CheckoutItems>
							{cartItems.map((item) => {
								return (
									<CheckoutItem
										key={item.id}
										cartItem={item}
									/>
								);
							})}
						</CheckoutItems>
					) : (
						<>
							<h2>Your cart is empty...</h2>
							<BackButton onClick={() => navigate('/shop')}>
								Continue shopping
							</BackButton>
						</>
					)}
				</CheckoutCartContainer>
				{!!cartCount && (
					<TotalContainer>
						<Total>Total</Total>
						<TotalTable>
							<TotalTableRow>
								<span>Subtotal: </span>
								<span>£{cartTotal} </span>
							</TotalTableRow>
							<TotalTableRow>
								<span>Delivery: </span>
								<span>£0 </span>
							</TotalTableRow>
							<FinalTotal>
								<span>Total (VAT included): </span>
								<span>£{cartTotal} </span>
							</FinalTotal>
						</TotalTable>
						{!!cartCount && (
							<>
								<Button onClick={openPayment}>Proceed to payment</Button>
							</>
						)}
					</TotalContainer>
				)}
			</CheckoutContainer>
		</>
	);
};
export default Checkout;
