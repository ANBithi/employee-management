import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useToast,
	VStack,
	HStack,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";
import { getCurrentUser } from "../../Helpers/userHelper";
import resignService from "../../services/resign.service";

const ResignModal = ({ isOpen, onClose, resign, onSuccess }) => {
	const onRejectClick = () => {
	        resignService.rejectRequest(resign.id).then(d=>{
            if(d){
                onClose();
				if (onSuccess !== undefined) {
					onSuccess();
				} 
				else {
					console.log("onSUccess undefined");
				}
            }
        })
	};
	const onAcceptClick = () => {
		let user = getCurrentUser();
		console.log(user);
		resignService.approvalRequest(user.reportsTo, resign.id).then((d) => {
			if (d) {
				console.log("approved");
				onClose();
				if (onSuccess !== undefined) {
					onSuccess();
				}
				else {
					console.log("onSUccess undefined");
				}
			}
		});
	};
	const onReferClick = () => {
		let user = getCurrentUser();
		console.log(user);
		resignService
			.approvalRequest(user.reportsTo, resign.id, "secondary")
			.then((d) => {
				if (d) {
					console.log("moved to secondary phase");
					onClose();
					if(onSuccess!== undefined){
                        onSuccess();
                    }
				}
			});
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="md">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Resign Details</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{resign && (
						<>
							{resign.refferedBy && (
								<HStack>
									<Text
										color="green"
										w="50%"
										fontWeight="bold"
									>
										Referred By
									</Text>
									<Text color="green">
										{resign.refferedBy}
									</Text>
								</HStack>
							)}
							<HStack>
								<Text w="50%" fontWeight="bold">
									Reason
								</Text>
								<Text>{resign.reason}</Text>
							</HStack>
							<HStack>
								<Text w="50%" fontWeight="bold">
									Resigning Month
								</Text>
								<Text>{resign.resignMonth}</Text>
							</HStack>
							<HStack>
								<Text w="50%" fontWeight="bold">
									Company Experience
								</Text>
								<Text>{resign.experienceUs}</Text>
							</HStack>
							<HStack>
								<Text w="50%" fontWeight="bold">
									Additional Information
								</Text>
								<Text>{resign.additionalInfo}</Text>
							</HStack>
							<HStack>
								<Text w="50%" fontWeight="bold">
									Achievements
								</Text>
								<Text>{resign.achievements}</Text>
							</HStack>
							<HStack>
								<Text w="50%" fontWeight="bold">
									Complain if any
								</Text>
								<Text>{resign.complain}</Text>
							</HStack>
						</>
					)}
				</ModalBody>
				<ModalFooter pr="5%">
					<Button colorScheme="red" onClick={onRejectClick}>
						Reject
					</Button>
					{resign?.refferedBy === null ? (
						<Button
							ml="2%"
							colorScheme="green"
							onClick={onReferClick}
						>
							Refer
						</Button>
					) : (
						<Button
							ml="2%"
							colorScheme="green"
							onClick={onAcceptClick}
						>
							Accept
						</Button>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default ResignModal;
