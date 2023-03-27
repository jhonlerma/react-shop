import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import BtAddToCart from "@icons/bt_add_to_cart.svg";
import AppContext from '@context/AppContext';

const ProductItem = ({ product }) => {

	const { addToCart, state } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item)
		console.log(state.cart);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={BtAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;