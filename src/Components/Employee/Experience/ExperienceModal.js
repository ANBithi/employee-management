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
} from "@chakra-ui/react";

const ExperienceModal = ({ isOpen, onClose, experience }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="sm">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Experience Details</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
							<HStack>
								<Text w = "35%" fontWeight="bold">Company:</Text>
								<Text>{experience.company}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Business:</Text>
								<Text>{experience.business}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Location:</Text>
								<Text>{experience.location}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Position Held:</Text>
								<Text>{experience.positionHeld}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Job Nature:</Text>
								<Text>{experience.jobNature}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Responsibilities:</Text>
								<Text>{experience.responsibilities}</Text>
							</HStack>

							<HStack>
								<Text w = "35%" fontWeight="bold">From Date:</Text>
								<Text>{experience.fromDate}</Text>
							</HStack>

							<HStack>
								<Text w = "35%" fontWeight="bold">To Date:</Text>
								<Text>{experience.toDate}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Department:</Text>
								<Text>{experience.department}</Text>
							</HStack>
							<HStack>
								<Text w = "35%" fontWeight="bold">Last Salary:</Text>
								<Text>{experience.lastSalary}</Text>
							</HStack>
                            <HStack>
								<Text w = "35%" fontWeight="bold">Remarks:</Text>
								<Text>{experience.remarks}</Text>
							</HStack>
				</ModalBody>
				<ModalFooter pr="12px"></ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default ExperienceModal;
