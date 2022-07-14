import {
	Box,
	Dialog,
	TextField,
	Typography,
	Button,
	styled,
} from "@mui/material";
import { useState, useContext } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
	height: 70vh;
	width: 90vh;
`;

const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		center 85% no-repeat;
	height: 83.4%;
	width: 33%;
	padding: 45px 35px;
	& > p,
	& > h5 {
		color: #ffffff;
		font-weight: 600;
	}
`;

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 25px 35px;
	flex: 1;
	& > div,
	& > button,
	& > p {
		margin-top: 20px;
	}
`;

const LoginButton = styled(Button)`
	text-transform: none;
	background: #fb641b;
	color: #fff;
	height: 48px;
	border-radius: 2px;
`;

const RequestOTP = styled(Button)`
	text-transform: none;
	background: #fff;
	color: #2874f0;
	height: 48px;
	border-radius: 2px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Text = styled(Typography)`
	font-size: 12px;
	color: #878787;
`;

const Error = styled(Typography)`
	color: #ff6161;
	font-size: 11px;
	line-height: 0;
	margin-top: 10px;
	font-weight: 600;
`;

const CreateAccount = styled(Typography)`
	font-size: 14px;
	text-align: center;
	color: #2874f0;
	font-weight: 600;
	cursor: pointer;
`;

const accountInitialValues = {
	login: {
		view: "login",
		heading: "Login",
		subHeading: "Get access to your Orders, Wishlist and Recommendations",
	},
	signup: {
		view: "signup",
		heading: "Looks like you're new here!",
		subHeading: "Sign Up to get started",
	},
};

const signupInitialValues = {
	firstname: "",
	lastname: "",
	username: "",
	email: "",
	password: "",
	phone: "",
};

const loginInitialValues = {
	username: "",
	password: "",
};

const LoginDialog = ({ open, setOpen }) => {
	const [account, toggleAccount] = useState(accountInitialValues.login);
	const [signup, setSignup] = useState(signupInitialValues);
	const [login, setLogin] = useState(loginInitialValues);
	const [error, setError] = useState(false);

	const { setAccount } = useContext(DataContext);

	const toggleSignUp = () => {
		toggleAccount(accountInitialValues.signup);
	};

	const handleClose = () => {
		setOpen(false);
		toggleAccount(accountInitialValues.login);
		setError(false);
	};

	const onInputChange = (e) => {
		setSignup({ ...signup, [e.target.name]: e.target.value });
	};

	const onValueChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};

	const loginUser = async () => {
		let response = await authenticateLogin(login);
		if (response.status === 200) {
			setAccount(response.data.data.firstname);
			handleClose();
		} else {
			setError(true);
		}
	};

	const signupUser = async () => {
		let response = await authenticateSignup(signup);
		if (!response) return;
		handleClose();
		setAccount(signup.firstname);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: { maxWidth: "unset" } }}
		>
			<Component>
				<Box style={{ display: "flex", height: "100% " }}>
					<Image>
						<Typography variant="h5">{account.heading}</Typography>
						<Typography style={{ marginTop: "20px" }}>
							{account.subHeading}
						</Typography>
					</Image>
					{account.view === "login" ? (
						<Wrapper>
							<TextField
								variant="standard"
								name="username"
								onChange={(e) => {
									onValueChange(e);
								}}
								label="Enter Username"
							/>
							<TextField
								variant="standard"
								name="password"
								onChange={(e) => {
									onValueChange(e);
								}}
								label="Enter Password"
							/>
							{error && (
								<Error>Please enter valid credentials.</Error>
							)}
							<Text>
								By continuing, you agree to Flipkart's Terms of
								Use and Privacy Policy.
							</Text>
							<LoginButton onClick={() => loginUser()}>
								Login
							</LoginButton>
							<Typography style={{ textAlign: "center" }}>
								OR
							</Typography>
							<RequestOTP>Request OTP</RequestOTP>
							<CreateAccount onClick={() => toggleSignUp()}>
								New to Flipkart? Create an account
							</CreateAccount>
						</Wrapper>
					) : (
						<Wrapper>
							<TextField
								variant="standard"
								label="Enter First Name"
								name="firstname"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant="standard"
								label="Enter Last Name"
								name="lastname"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant="standard"
								label="Enter Username"
								name="username"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant="standard"
								label="Enter Email"
								name="email"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant="standard"
								label="Enter Password"
								name="password"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant="standard"
								label="Enter Phone"
								name="phone"
								onChange={(e) => {
									onInputChange(e);
								}}
							/>

							<LoginButton onClick={() => signupUser()}>
								Continue
							</LoginButton>
						</Wrapper>
					)}
				</Box>
			</Component>
		</Dialog>
	);
};

export default LoginDialog;
