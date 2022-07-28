import { Box, Button, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const imgurl =
	"https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const Component = styled(Box)`
	height: 65vh;
	width: 80%;
	background: #fff;
	margin: 80px 140px;
`;

const Container = styled(Box)`
	text-align: center;
	padding-top: 70px;
`;

const StyledButton = styled(Button)`
	background: #2874f0;
	color: #ffffff;
	font-size: 14px;
	width: 180px;
`;

const EmptyCart = () => {
	return (
		<Component>
			<Container>
				<img src={imgurl} alt="empty-cart" style={{ width: "15%" }} />
				<Typography>Your cart is empty!</Typography>
				<Typography>Add items to it now.</Typography>
				<Link to="/">
					<StyledButton>Shop Now</StyledButton>
				</Link>
			</Container>
		</Component>
	);
};

export default EmptyCart;
