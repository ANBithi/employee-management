import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	VStack,
	HStack,
	Text,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { PAYSLIP_ROW_VAL } from "./financeData";
const PaySlipModal = ({ isOpen, onClose, generatePaySlip }) => {
	const contentRef = useRef();

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="full">
			<ModalOverlay />
			<ModalContent bg = "primary.50" color = "primary.900">
				<ModalHeader>Month/Year</ModalHeader>
				<ModalCloseButton />
				<ModalBody ref={contentRef} >
					{generatePaySlip && (
						<VStack w="full" gap={0}>
							<VStack mb="3%" mt="2%">
								<Text fontWeight="bold" fontSize="22px">
									Employee Management
								</Text>
								<Text fontWeight="bold">
									Pay Slip - Month/Year
								</Text>
							</VStack>
							<Grid w="full">
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>PIN</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>Card No</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>Employee Name</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>Designation</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>TIN</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>Total Workdays</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
								<GridItem>
									<HStack justify="space-around">
										<HStack justify="space-between" w="30%">
											<Text>Salary Issue-Date</Text>
											<Text>:</Text>
										</HStack>
										<Text>value</Text>
									</HStack>
								</GridItem>
							</Grid>

							<Grid
								p="3%"
								templateColumns="repeat(2, 1fr)"
								w="full"
							>
								<GridItem
									align="center"
									bg="transparent"
									border="1px solid"
									borderColor="primary.900"
								>
									Particulars
								</GridItem>
								<GridItem
									align="center"
									bg="transparent"
									border="1px solid"
									borderColor="primary.900"
								>
									Amounts
								</GridItem>
								{PAYSLIP_ROW_VAL.map((val) => {
									return (
										<>
											<GridItem
												align="center"
												bg="transparent"
												border="1px solid"
												borderColor="primary.900"
											>
												{val.name}
											</GridItem>
											<GridItem
												align="center"
												bg="transparent"
												border="1px solid"
												borderColor="primary.900"
											>
												40000
											</GridItem>
										</>
									);
								})}
							</Grid>
						</VStack>
					)}
				</ModalBody>
				<ModalFooter pr="3%">
					<ReactToPrint
						trigger={() => <Button>Print</Button>}
						content={() => contentRef.current}
					/>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default PaySlipModal;
