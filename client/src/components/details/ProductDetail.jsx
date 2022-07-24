import {
	Box,
	Typography,
	styled,
	Table,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
	font-size: 14px;
	vertical-align: baseline;
	& > p {
		font-size: 14px;
		margin-top: 10px;
	}
`;

const StyledBadge = styled(Badge)`
	margin-right: 10px;
	color: #00cc00;
	font-size: 15px;
`;

const ProductDetail = ({ product }) => {
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	const adURL =
		"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

	const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

	return (
		<>
			<Typography>{product.title.longTitle}</Typography>
			<Typography
				style={{
					marginTop: 5,
					color: "#878787",
					fontSize: 14,
				}}
			>
				8 Ratings & 1 Reviews
				<Box component="span">
					<img
						src={fassured}
						alt="assured-img"
						style={{ width: 77, marginLeft: 20 }}
					/>
				</Box>
			</Typography>
			<Typography>
				<Box component="span" style={{ fontSize: 28 }}>
					₹{product.price.cost}
				</Box>
				&nbsp;&nbsp;&nbsp;
				<Box component="span" style={{ color: "#878787" }}>
					<strike>₹{product.price.mrp}</strike>
				</Box>
				&nbsp;&nbsp;&nbsp;
				<Box component="span" style={{ color: "#388e3c" }}>
					{product.price.discount}
				</Box>
			</Typography>
			<Typography>Available Offers</Typography>
			<SmallText>
				<Typography>
					<StyledBadge />
					10% off on Axis Bank Credit Cards, up to ₹1250. On orders of
					₹3000 and above T&C
				</Typography>
				<Typography>
					<StyledBadge />
					10% off on Kotak Bank Credit Cards, up to ₹1,500. On orders
					of ₹3,000 and above T&C
				</Typography>
				<Typography>
					<StyledBadge />
					Sign up for Flipkart Pay Later and get Flipkart Gift Card
					worth up to ₹500* Know More
				</Typography>
				<Typography>
					<StyledBadge />
					Flat ₹50 Cashback on Paytm Wallet; Min Trxn Value: ₹1,000;
					Valid once per Paytm account T&C
				</Typography>
				<Typography>
					<StyledBadge />
					5% Cashback on Flipkart Axis Bank Card T&C
				</Typography>
				<Typography>
					<StyledBadge />
					No Cost EMI on Bajaj Finserv EMI Card on cart value above
					₹2999 T&C
				</Typography>
			</SmallText>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell style={{ color: "#878787" }}>
							Delivery
						</TableCell>
						<TableCell style={{ fontWeight: 600 }}>
							Delivery By: {date.toDateString()} | ₹40
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ color: "#878787" }}>
							Warranty
						</TableCell>
						<TableCell>No Warranty</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ color: "#878787" }}>
							Seller
						</TableCell>
						<TableCell>
							<Box component="span" style={{ color: "#2874f0" }}>
								SuperComNet
							</Box>
							<Typography>7 Days Replacement Policy</Typography>
							<Typography>GST Invoice Available</Typography>
							<Typography>
								View More Seller starting from ₹
								{product.price.cost}
							</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell colSpan={2}>
							<img
								src={adURL}
								alt="supercoin-img"
								style={{ width: 390 }}
							/>{" "}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ color: "#878787" }}>
							Description
						</TableCell>
						<TableCell>{product.description}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};

export default ProductDetail;
