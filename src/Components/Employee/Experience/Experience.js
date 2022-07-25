import { HStack, Flex, Button, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../../services/employee.service";
import ExperienceForm from "./ExperienceForm";

const Experience = () => {
	const [experienceObj, setExperienceObj] = useState({});
	const toast = useToast();

	const onSaveClick = () => {
		let experience = {
			experience: experienceObj,
		};
		if (employeeService.saveExperience(experience)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Work Experience Saved.",
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
			<Flex flexDirection="column" w='100%'>
				<ExperienceForm
					experienceObj={experienceObj}
					setExperienceObj={setExperienceObj}
				/>
				<HStack layerStyle="pageButtonStyle">
					<Button fontWeight="normal" onClick={onSaveClick}>
						Save
					</Button>
					<Button fontWeight="normal">Refresh</Button>
					<Button fontWeight="normal">Delete</Button>
				</HStack>
			</Flex>
		</Flex>
	);
};
export default Experience;
