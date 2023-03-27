import React from 'react';
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

import OrderItem from '@components/OrderItem';

import '@styles/MyOrder.scss';
import Flechita from '@icons/flechita.svg'

const MyOrder = () => {

	const { state } = useContext(AppContext);

	return (

		<aside className="MyOrder">
			<div className="title-container">
				<img src={Flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="order">
					{state.cart.map((product) => (
						<OrderItem product={product} key={`order-item${product.id}`}/>
					))}
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>

	);
}

export default MyOrder;