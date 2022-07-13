import mongoose from "mongoose";

const Connection = async (username, password) => {
	const URL = `mongodb://${username}:${password}@ac-zejsb4c-shard-00-00.5fyjfbz.mongodb.net:27017,ac-zejsb4c-shard-00-01.5fyjfbz.mongodb.net:27017,ac-zejsb4c-shard-00-02.5fyjfbz.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-om8tnl-shard-0&authSource=admin&retryWrites=true&w=majority`;
	try {
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Database Connected.");
	} catch (error) {
		console.log("Error in database connection:", error.message);
	}
};

export default Connection;
