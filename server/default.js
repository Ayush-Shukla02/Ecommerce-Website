import Product from "./model/productSchema.js";
import { products } from "./constants/product.js";

const DefaultData = async () => {
	try {
		await Product.deleteMany({});
		await Product.insertMany(products);
	} catch (error) {
		console.log("Error: ", error.message);
	}
};

export default DefaultData;
