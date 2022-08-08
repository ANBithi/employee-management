import { HStack, Flex, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../../services/employee.service";
import ManageProfileForm from "./ManageProfileForm";

const ManageProfile = () => {
	const [manageProfileObj, setManageProfileObj] = useState({});
	const toast = useToast();

	const onSaveClick = () => {
		let profile = {
			manageProfile: manageProfileObj,
		};
		console.log(profile);
		if (employeeService.updateManageProfile(profile)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Profile Updated.",
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
				<ManageProfileForm
					manageProfileObj={manageProfileObj}
					setManageProfileObj={setManageProfileObj}
				/>
				<HStack layerStyle="pageButtonStyle">
					<Button fontWeight="normal" onClick={onSaveClick}>
						Save
					</Button>
					<Button fontWeight="normal">Remove</Button>
					<Button fontWeight="normal">Refresh</Button>
				</HStack>
			</Flex>
		</Flex>
	);
};
export default ManageProfile;
