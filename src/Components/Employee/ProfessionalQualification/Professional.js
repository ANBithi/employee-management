import { HStack, Flex, Button, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../../services/employee.service";
import ProfessionalForm from "./ProfessionalForm";

const Professional = () => {
	const [professionalObj, setProfessionalObj] = useState({});
	const toast = useToast();


	const onSaveClick = () => {
		let qualification = {
			profession: professionalObj,
		};
		if (employeeService.saveQualification(qualification)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Qualification Saved.",
				position: "bottom-right",
				variant: "subtle",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
		}
	};
	return (
		<Flex layerStyle="pageStyle">
			<VStack align="start" w="100%">
				<ProfessionalForm
					professionalObj={professionalObj}
					setProfessionalObj={setProfessionalObj}
				/>
				<HStack layerStyle="pageButtonStyle">
					<Button fontWeight="normal" onClick={onSaveClick}>
						Save
					</Button>
					<Button fontWeight="normal">Refresh</Button>
					<Button fontWeight="normal">Delete</Button>
				</HStack>
			</VStack>
		</Flex>
	);
};
export default Professional;
