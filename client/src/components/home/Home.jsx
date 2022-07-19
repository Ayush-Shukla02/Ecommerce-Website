import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
	padding: 10px;
	backgroud: #f2f2f2;
`;

const Home = () => {
	const { products } = useSelector((state) => state.getProducts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<Component>
				<Banner />
				<MidSlide
					products={products.products}
					title="Deal of the Day"
					timer={true}
				/>
				<MidSection />
				<Slide
					products={products.products}
					title="Discounts for You"
					timer={false}
				/>
				<Slide
					products={products.products}
					title="Suggested Items"
					timer={false}
				/>
				<Slide
					products={products.products}
					title="Top Selection"
					timer={false}
				/>
				<Slide
					products={products.products}
					title="Recommended Items"
					timer={false}
				/>
				<Slide products={products.products} title="Trending Offers" />
				<Slide
					products={products.products}
					title="Season's Top Picks"
					timer={false}
				/>
				<Slide
					products={products.products}
					title="Top Deals on Accessories"
					timer={false}
				/>
			</Component>
		</>
	);
};

export default Home;
