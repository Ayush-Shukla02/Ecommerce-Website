import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Cart = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<>
			{cartItems.length ? (
				<Grid container>
					<Grid item lg={9} md={9} sm={12} xs={12}>
						<Box>
							<Typography>
								My Cart ({cartItems.length}){" "}
							</Typography>
						</Box>
						{cartItems.map((item) => (
							<CartItem />
						))}
					</Grid>
					<Grid item lg={3} md={3} sm={12} sx={12}>
						<TotalView />
					</Grid>
				</Grid>
			) : (
				<div>Cart is Empty</div>
			)}
		</>
	);
};

export default Cart;
