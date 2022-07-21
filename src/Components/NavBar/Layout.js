import {
	Image,
	Avatar,
	Flex,
	Button,
	HStack,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
} from "@chakra-ui/react";
//import Logo from '../public/logo.svg';
import React from "react";
import loginService from "../../services/login.service";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { DATA } from "./navigationData";
import { Outlet, Link, useNavigate } from "react-router-dom";
const CTA = "Get Started";

export default function Layout() {
	const navigate = useNavigate();
	const onLogoutClick = () => {
		loginService.logOff();
		navigate("/login");
	}
	return (
		<div>
			<Flex
				w="100%"
				px="6"
				py="5"
				align="center"
				justify="space-between"
				bg="primary.100"
			>
				{/* <Image src={Logo.src} h="50px" /> */}

				<HStack as="nav" spacing="10">
					{DATA.map((item, i) => (
						<HStack>
							{item.subMenu ? (
								<Menu>
									<Button variant="nav">{item.label}</Button>
									<MenuButton
										style={{ marginInlineStart: "-2rem" }}
										marginInlineStart
										m={0}
										as={Button}
										variant="nav"
										rightIcon={<ChevronDownIcon />}
									/>
									<MenuList>
										{item.subMenu.map((menu, index) => {
											return (
												<MenuItem key={index}>
													<Link to={menu.link}>
														{menu.label}
													</Link>
												</MenuItem>
											);
										})}
									</MenuList>
								</Menu>
							) : (
								<Link key={i} to={item.link}>
									<Button variant="nav">{item.label}</Button>
								</Link>
							)}
						</HStack>
					))}
				</HStack>
				<HStack>
					<Menu>
						<MenuButton
							style={{ marginInlineStart: "-2rem" }}
							marginInlineStart
							m={0}
							as={Button}
							variant="nav"
						>
							<Avatar
								size="sm"
								name="Oshigaki Kisame"
								src="https://bit.ly/broken-link"
							/>
						</MenuButton>
						<MenuList>
							<MenuItem>
								<Link to="/settings">Settings</Link>
							</MenuItem>
							<MenuItem onClick={onLogoutClick}>Logout</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</Flex>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the child routes we defined above. */}
			<Outlet />
		</div>
	);
}
