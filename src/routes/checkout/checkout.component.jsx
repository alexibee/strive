import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useDispatch, useSelector } from 'react-redux';
import './checkout.styles.scss';
import {
	selectCartCount,
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import Button from '../../components/button/button.component';
import Modal from '../../components/modal/modal.component';
import { useNavigate } from 'react-router-dom';
import { setIsModalOpen, setModalType } from '../../store/modal/modal.action';

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
			<div className='checkout-container'>
				<div className='checkout-cart-container'>
					<div className='checkout-main-header'>
						<h1> Your cart ({cartCount} items)</h1>
					</div>
					<div className='checkout-header'>
						<div className='header-col'>
							<span>Product</span>
						</div>
						<div className='header-col'>
							<span>Description</span>
						</div>
						<div className='header-col'>
							<span>Quantity</span>
						</div>
						<div className='header-col'>
							<span>Price</span>
						</div>
						<div className='header-col'>
							<span>Remove</span>
						</div>
					</div>

					{cartCount ? (
						<div className='checkout-items'>
							{cartItems.map((item) => {
								return (
									<CheckoutItem
										key={item.id}
										item={item}
									/>
								);
							})}
						</div>
					) : (
						<>
							<h2>Your cart is empty...</h2>
							<Button
								addClass='back'
								onClick={() => navigate('/shop')}
							>
								Continue shopping
							</Button>
						</>
					)}
				</div>
				{!!cartCount && (
					<div className='total-container'>
						<span className='total'>Total</span>
						<div className='total-table'>
							<div className='total-table-row'>
								<span>Subtotal: </span>
								<span>£{cartTotal} </span>
							</div>
							<div className='total-table-row'>
								<span>Delivery: </span>
								<span>£0 </span>
							</div>
							<div className='total-table-row final-total'>
								<span>Total (VAT included): </span>
								<span>£{cartTotal} </span>
							</div>
						</div>
						{!!cartCount && (
							<>
								<Button onClick={openPayment}>Proceed to payment</Button>
							</>
						)}
					</div>
				)}
			</div>
		</>
	);
};
export default Checkout;
