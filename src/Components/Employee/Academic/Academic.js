import { HStack, Flex, Button, useToast, Text } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../../services/employee.service";
import AcademicForm from "./AcademicForm";

const Academic = () => {
	const [academicObj, setAcademicObj] = useState({});
	const toast = useToast();

	const onSaveClick = () => {
		let academic = {
			academic: academicObj,
		};
		console.log(academic);
		if (employeeService.saveAcademicInfo(academic)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Academic Information Saved.",
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
			<Flex  flexDirection="column" w='100%'>
				<Text layerStyle="sectionHeaderStyle">
					Academic Information
				</Text>
				<AcademicForm
					academicObj={academicObj}
					setAcademicObj={setAcademicObj}
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
export default Academic;
