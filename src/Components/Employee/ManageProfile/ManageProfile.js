import { HStack, Flex, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../../services/employee.service";
import ManageProfileForm from "./ManageProfileForm";

const ManageProfile = () => {
	const toast = useToast();
	return (
		<Flex layerStyle="pageStyle">
			<Flex flexDirection="column" w='100%'>
				<ManageProfileForm
				/>
			</Flex>
		</Flex>
	);
};
export default ManageProfile;
