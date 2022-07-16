import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
	try {
		const exist = await User.findOne({ username: req.body.username });
		if (exist) {
			return res.status(401).json({ message: "Username already exists" });
		}

		const user = req.body;
		const newUser = new User(user);
		await newUser.save();

		res.status(200).json({ message: user });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

export const userLogin = async (req, res) => {
	try {
		const username = req.body.username;
		const password = req.body.password;

		let user = await User.findOne({
			username: username,
			password: password,
		});
		if (user) {
			res.status(200).json({ data: user });
		} else {
			res.status(401).json({ message: "Invalid credentials" });
		}
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
