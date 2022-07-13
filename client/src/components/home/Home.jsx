import { Fragment } from "react";
import { Box, styled } from "@mui/material";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";

const Component = styled(Box)`
	padding: 10px;
	backgroud: #f2f2f2;
`;

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<Component>
				<Banner />
			</Component>
		</Fragment>
	);
};

export default Home;
