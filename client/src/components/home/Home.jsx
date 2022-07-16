import { useEffect } from "react";
import { Box, styled } from "@mui/material";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
	padding: 10px;
	backgroud: #f2f2f2;
`;

const Home = () => {
	const dispatch = useDispatch();

	const { products } = useSelector((state) => state.getProducts);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<Component>
				<Banner />
			</Component>
		</>
	);
};

export default Home;
