import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const HeadingWrapper = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
	color: #878787;
`;

const Container = styled(Box)`
	padding: 15px 24px;
	background: #fff;
	& > p {
		margin-bottom: 20px;
		font-size: 14px;
	}
	& > h6 {
		margin-bottom: 20px;
	}
`;

const Price = styled(Box)`
	float: right;
`;

const Discount = styled(Typography)`
	color: green;
	font-weight: 500;
`;

const TotalView = ({ cartItems }) => {
	const [price, setPrice] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [delivery, setDelivery] = useState(40);

	useEffect(() => {
		totalAmount();
	}, [cartItems]);

	const totalAmount = () => {
		let price = 0;
		let discount = 0;
		cartItems.map((item) => {
			price += item.price.mrp;
			discount += item.price.mrp - item.price.cost;
		});
		setPrice(price);
		setDiscount(discount);
	};

	const amt = price - discount;

	// if (amt > 499) setDelivery(0);
	// else setDelivery(40);

	return (
		<Box>
			<HeadingWrapper>
				<Heading>Price Details</Heading>
			</HeadingWrapper>
			<Container>
				<Typography>
					Price ({cartItems?.length} item)
					<Price component="span">₹{price}</Price>
				</Typography>
				<Typography style={{ color: "green" }}>
					Discount
					<Price component="span">-₹{discount}</Price>
				</Typography>
				<Typography>
					Delivery Charges
					<Price component="span">₹{delivery}</Price>
				</Typography>
				<Typography variant="h6">
					Total Amount
					<Price component="span">₹{amt + delivery}</Price>
				</Typography>
				<Discount>
					You will save ₹{discount - delivery} on this order.
				</Discount>
			</Container>
		</Box>
	);
};

export default TotalView;
