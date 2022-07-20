import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
//import Logo from '../public/logo.svg';
import React from "react";
import Home from '../Home';
import { Link } from 'react-router-dom';
const CTA = "Get Started"
const data = [{
    label: "Home",
    link : ""
},
{
    label: "Settings",
    link: "setting"
}]
export default function Header() {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        bg = "primary.100"
      >
        {/* <Image src={Logo.src} h="50px" /> */}
        
        <HStack as="nav" spacing="5">
          {data.map((item, i) => (
              <Link key = {i} to = {item.link}>
              <Button variant="nav"> {item.label} </Button>
              </Link>
          ))}
        </HStack>
        <HStack>
          <Button w = "full" bg = "primary.900">
            {CTA}
          </Button>
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}