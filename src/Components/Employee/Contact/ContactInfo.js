import { HStack, VStack, Button, useToast, Flex } from "@chakra-ui/react";
import { useState } from "react";
import CurrentAddress from "./CurrentAddress";
import EmergencyContact from "./EmergencyContact";
import PermanentAddress from "./PermanentAddress";
import employeeService from "../../../services/employee.service";

const ContactInfo = () => {
	const [permanentAddressObj, setPermanentAddressObj] = useState({});
	const [currentAddressObj, setCurrentAddressObj] = useState({});
	const [emergencyContactObj1, setEmergencyContactObj1] = useState({});
	const [emergencyContactObj2, setEmergencyContactObj2] = useState({});
	const toast = useToast();

	const onUpdateClick = () => {
		let updateContact = {
			permanentAddress: permanentAddressObj,
			currentAddress: currentAddressObj,
			emergencyContacts: [emergencyContactObj1, emergencyContactObj2],
		};
		//console.log(updateContact);
		if (employeeService.updatePersonalInfo(updateContact)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Contact Updated.",
				position: "bottom-right",
				variant: "subtle",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
		}
	};

	return (
		<Flex layerStyle='pageStyle'>
			<VStack w="full" h = "100%" fontSize="14px" align="flex-start">
				<HStack w="full" align="start">
					<PermanentAddress
						permanentAddressObj={permanentAddressObj}
						setPermanentAddressObj={setPermanentAddressObj}
					/>
					<CurrentAddress
						currentAddressObj={currentAddressObj}
						setCurrentAddressObj={setCurrentAddressObj}
					/>
				</HStack>
				<HStack w="full">
					<EmergencyContact
						emergencyContactObj={emergencyContactObj1}
						setEmergencyContactObj={setEmergencyContactObj1}
					/>
					<EmergencyContact
						emergencyContactObj={emergencyContactObj2}
						setEmergencyContactObj={setEmergencyContactObj2}
					/>
				</HStack>
				<HStack layerStyle="pageButtonStyle">
					<Button fontWeight="normal" onClick={onUpdateClick}>
						Update
					</Button>
					<Button fontWeight="normal">Refresh</Button>
				</HStack>
			</VStack>
		</Flex>
	);
};
export default ContactInfo;
