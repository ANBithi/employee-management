import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ResignForm from "./ResignForm";

const Resign = () => {
	const [resignObj, setResignObj] = useState({});

    const onApplyClick = () => {
	let isResigning = true;
    let newObj = {...resignObj, isResigning};
    setResignObj(newObj);
    console.log(newObj);
	};
	return (
		<Flex layerStyle="pageStyle">
			<VStack w="full" align="start">
				<ResignForm
					resignObj={resignObj}
					setResignObj={setResignObj}
				></ResignForm>
				<Button fontWeight="normal" onClick={onApplyClick}>
					Apply
				</Button>
			</VStack>
		</Flex>
	);
};
export default Resign;
