import { Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../Helpers/userHelper";
import loginService from "../services/login.service";

const Home = () =>{    
    const [currentUser, setCurrentUser] =  useState(getCurrentUser());
    useEffect(()=>{
        loginService.checkProfileStatus().then(d=>{
            if(d){
                localStorage.setItem("loggedIn-status", JSON.stringify(false));
                window.location.reload();
            }
        })
    }, [])
    return(
       <Flex layerStyle="pageStyle">
       <VStack w = "full" align = "center">
       <Text fontSize="34px">Welcome</Text>
       <Text fontSize= "28px">{currentUser.firstName} {currentUser.lastName}!</Text>
       </VStack>
       </Flex>
    )
}
export default Home;