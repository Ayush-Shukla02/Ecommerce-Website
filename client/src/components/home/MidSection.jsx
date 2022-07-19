import { Box } from "@mui/material";

import { imageURL } from "../../constants/data";

const MidSection = () => {
	return (
		<Box style={{ display: "flex" }}>
			{imageURL.map((image) => (
				<img src={image} alt="image" style={{ width: "100%" }} />
			))}
		</Box>
	);
};

export default MidSection;
