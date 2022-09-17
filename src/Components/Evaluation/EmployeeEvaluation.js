import {
	Flex,
	Text,
	VStack,
	HStack,
	Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";

const EmployeeEvaluation = () => {
	const [userSupervisor, setUserSupervisor] = useState();
	
	useEffect(()=>{
		userService.getUserSupervisor().then((d)=>{
			console.log(d);
			setUserSupervisor(d);
		})
	}, [])
	

	return (
		<Flex layerStyle="pageStyle">
			<VStack w="full" align="flex-start">
			    <HStack w = "40%" justify = "space-between">
					<Text>Evaluation In-charge </Text>
					<Text fontWeight="bold">{userSupervisor?.fullName}</Text>
				</HStack>
				<HStack w = "40%" justify = "space-between" mt = "5%">
				<Text>Get an Evaluation </Text>
				<Button>Request</Button>
				</HStack>

				{/* <Text layerStyle="sectionHeaderStyle">Employee Evaluation</Text>
				<Text>Performance Growth</Text>
				<Text>Salary Growth</Text>
				<Text>Learnings:</Text> */}
			</VStack>
		</Flex>
	);
};
export default EmployeeEvaluation;
