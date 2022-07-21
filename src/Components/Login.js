import {
	VStack,
	Heading,
	Text,
	Input,
	Checkbox,
	Button,
	Flex,
	Box,
	FormControl,
	FormLabel,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login.service";
const Login = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [rememberUser, setRememberUser] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const navigate = useNavigate();
	const onSignIn = (e) => {
		e.preventDefault();
		//alert(`Email: ${userEmail} & Password: ${userPassword}`);
		let user = {
			email : userEmail,
			password : userPassword,
			rememberMe : rememberUser,
		}
		let lg = loginService.getLogingStatus();
		if (lg) {
			navigate("/home");
		}
		setIsLoggedIn(lg);
		setUserEmail("");
		setUserPassword("");
	};
	const onCheckBoxClick = (e) => {
		let value = e.target.checked;
		setRememberUser(value);
	};
	const onEmailInputChange = (e) => {
		let value = e.target.value;
		setUserEmail((prevUserEmail) => (prevUserEmail = value));
	};
	const onPasswordInputChange = (e) => {
		let value = e.target.value;
		setUserPassword((prevUserPassword) => (prevUserPassword = value));
	};
	return (
		<Flex h="full" w="full">
			<VStack h="full" w="50%">
				<Heading mt="12%">Welcome Back</Heading>
				<Text fontSize="14px">
					Welcome back! Please enter your details.
				</Text>
				<Flex w="60%" flexDirection="column">
					<FormControl isRequired>
						<FormLabel fontSize="12px" fontWeight="bold" ml="2%">
							Email
						</FormLabel>
						<Input
							w="full"
							type="email"
							placeholder="Enter your email"
							fontSize="14px"
							onChange={onEmailInputChange}
						></Input>
					</FormControl>
					<FormControl isRequired>
						<FormLabel fontSize="12px" fontWeight="bold" ml="2%">
							Password
						</FormLabel>
						<Input
							type="password"
							fontSize="14px"
							placeholder="Enter your password"
							onChange={onPasswordInputChange}
							w="full"
						></Input>
					</FormControl>
				</Flex>
				<Box
					w="60%"
					layerStyle="flexMarginStyle"
					textStyle="smallAndBoldStyle"
				>
					<Checkbox
						justify="flex-start"
						onChange={onCheckBoxClick}
					></Checkbox>
					<Text ml="2%" flex="1">
						Remember for 30 days
					</Text>
					<Link alignSelf="flex-end" mr="2%">
						Forgot password
					</Link>
				</Box>
				<Button
					type="submit"
					bg="primary.900"
					layerStyle="customButton"
					onClick={onSignIn}
				>
					Sign in
				</Button>
				<Flex
					textStyle="smallAndBoldStyle"
					w="60%"
					layerStyle="flexMarginStyle"
				>
					<Text flex="1" ml="2%">
						Don't have an account?
					</Text>
					<Link mr="2%">Sign up for free</Link>
				</Flex>
			</VStack>
			
		</Flex>
	);
};
export default Login;
