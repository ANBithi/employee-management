import {
	Image,
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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { DATA } from "./navigationData";
import { Outlet, Link } from "react-router-dom";
const CTA = "Get Started";

export default function Layout() {
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
									<Button variant="nav">
										{item.label}
									</Button>
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
									<Button variant="nav">
										{item.label}
									</Button>
								</Link>
							)}
						</HStack>
					))}
				</HStack>
				<HStack>
					<Button w="full" bg="primary.900">
						{CTA}
					</Button>
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
