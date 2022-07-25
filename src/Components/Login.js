import {
	VStack,
	Heading,
	Text,
	Input,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login.service";
const Login = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const navigate = useNavigate();
	const onSignIn = (e) => {
		e.preventDefault();
		//alert(`Email: ${userEmail} & Password: ${userPassword}`);
		let user = {
			email : userEmail,
			password : userPassword,
		}
		var auth = loginService.logIn(user); 
		if (auth.success === true) {
			localStorage.setItem("userDetails", JSON.stringify(auth.user));
			navigate("/");
		}
		setUserEmail("");
		setUserPassword("");
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
				<Flex
					w="60%"
					layerStyle="flexMarginStyle"
					textStyle="smallAndBoldStyle"
					justify = "center"
				>
					<Link mr="2%">
						Forgot password
					</Link>
				</Flex>
				<Button
					type="submit"
					bg="primary.900"
					layerStyle="customButton"
					onClick={onSignIn}
					w = "60%"
				>
					Sign in
				</Button>
			</VStack>
			
		</Flex>
	);
};
export default Login;
