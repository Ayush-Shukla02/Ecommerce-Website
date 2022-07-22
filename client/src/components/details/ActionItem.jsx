import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import { Bolt as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)`
	min-width: 40%;
	padding: 40px 0 0 80px;
`;

const Image = styled("img")({
	padding: "15px",
});

const StyledButton = styled(Button)`
	width: 48%;
	height: 50px;
	border-radius: 4px;
`;

const ActionItem = ({ product }) => {
	return (
		<LeftContainer>
			<Box
				style={{
					width: "90%",
					padding: "15px 20px",
					border: "1px solid #f0f0f0",
				}}
			>
				<Image src={product.detailUrl} alt="product-image" />
			</Box>
			<StyledButton
				variant="contained"
				style={{ marginRight: 10, background: "#ff9f00" }}
			>
				<CartIcon />
				Add to Cart
			</StyledButton>
			<StyledButton variant="contained" style={{ background: "#fb541b" }}>
				<Flash />
				Buy Now
			</StyledButton>
		</LeftContainer>
	);
};

export default ActionItem;
