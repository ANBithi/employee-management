import { HStack, Flex, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import leaveService from "../../../services/leave.service";
import LeaveApplicationForm from "./LeaveApplicationForm";

const LeaveApplication = () => {
	const [leaveApplicationObj, setLeaveApplicationObj] = useState({});
	const toast = useToast();

	const onSaveClick = () => {
		let leaveApplication = {
			leaveApplication: leaveApplicationObj,
		};
		if (leaveService.saveLeaveApplication(leaveApplication)) {
			toast({
				containerStyle: {
					fontSize: "14px",
					fontWeight: "normal",
				},
				title: "Leave Application Saved.",
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
			<Flex flexDirection="column" w="100%">
				<LeaveApplicationForm
					leaveApplicationObj={leaveApplicationObj}
					setLeaveApplicationObj={setLeaveApplicationObj}
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
export default LeaveApplication;
