import { Button, Flex, useColorMode
} from "@chakra-ui/react";


const Setting = () =>{
    const {toggleColorMode } = useColorMode();
    return(
           <Flex layerStyle="pageStyle">
            <Button onClick={toggleColorMode}>
                Change Theme
            </Button>
           </Flex>
    )
}
export default Setting;