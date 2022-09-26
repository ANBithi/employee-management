import { Button, Flex, List, ListItem, ListIcon, Text, VStack, Grid, GridItem, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CheckCircleIcon, SettingsIcon, WarningIcon } from '@chakra-ui/icons'
import resignService from "../../services/resign.service";
import ResignForm from "./ResignForm";
import ResignModal from "./ResignModal";

const Resign = () => {
	const [resignObj, setResignObj] = useState({});
	const [isAppliedResign, setIsAppliedResign] = useState(false);
	const [userResign , setUserResign] = useState();
	const [resignRequests, setResignRequests] = useState([]);
	const [currentResign,setCurrentResign] = useState();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

const fetchAllRequests = () => {
	resignService.getAllRequests().then(d=>{
		if(d.response)
		{
			setResignRequests(d.data);
		}
	});
}
const fetchUserRequest = () => {
	resignService.getUserRequest().then(d=>{
		setIsAppliedResign(d.response);
		if(d.response){
			setUserResign(d.data);
		}
	});
}

	useEffect(()=>{
		fetchAllRequests();
		fetchUserRequest()
	}, [])

	const onApplyClick = () => {
		let isResigning = true;
		let newObj = { ...resignObj, isResigning };
		setResignObj(newObj);
		resignService.applyResign(newObj).then(d=>{
			if(d){
				toast({
					containerStyle: {
						fontSize: "14px",
						fontWeight: "normal",
					},
					title: d.message,
					position: "bottom-right",
					variant: "subtle",
					status: "success",
					duration: 1000,
					isClosable: true,
				});
			}
		})
	};
	const onCancelCLick = () => {
		resignService.cancelResign(userResign.id).then(d=>{
			if(true){
				setIsAppliedResign(false);
			}
		})
	};
	return (
		<Flex layerStyle="pageStyle">
			<VStack w="full" align="start">
			{isAppliedResign === false  ? (
				<>
					<ResignForm
						resignObj={resignObj}
						setResignObj={setResignObj}
					></ResignForm>
					<Button
						p="1%"
						fontWeight="normal"
						disabled={
							resignObj?.supervisor === null ||
							resignObj?.supervisor === undefined ||
							resignObj.length < 0
						}
						onClick={onApplyClick}
					>
						Apply
					</Button>
				</>
			) : (
				<>
				<Text layerStyle="sectionHeaderStyle" >Resign status</Text>
					{userResign !== null && userResign !== undefined && (
						<List spacing={3}>
							{userResign.refferedBy !== null && (
								<ListItem>
									<ListIcon
										as={CheckCircleIcon}
										color="green.500"
									/>
									Referred By : {userResign.refferedBy}
								</ListItem>
							)}
							{userResign.approvedBy !== null && (
								<ListItem>
									<ListIcon
										as={CheckCircleIcon}
										color="green.500"
									/>
									Approved By : {userResign.approvedBy}
								</ListItem>
							)}
							{userResign.rejectedBy !== null && (
								<ListItem>
									<ListIcon
										as={WarningIcon}
										color="red.500"
									/>
									Rejected By : {userResign.rejectedBy}
								</ListItem>
							)}
						</List>
					)}

					
					<Button onClick={onCancelCLick}>Cancel</Button>
				</>
			)}
			{resignRequests.length > 0 && (
						<VStack w="full" align="start">
							<Text layerStyle="sectionHeaderStyle">
								Resign Applications
							</Text>
							<Grid
								templateColumns="repeat(3, 1fr)"
								w="60%"
								gap="1%"
							>
								{resignRequests?.map((resign, index) => {
									return (
										<GridItem
											layerStyle="gridItemStyle"
											colSpan={1}
											mt="2%"
											mb="2%"
											align="start"
											key={index}
											onClick={() => {
												onOpen();
												setCurrentResign(resign);
											}}
										>
											{resign.employeeName}
										</GridItem>
									);
								})}
							</Grid>
						</VStack>
					)}
					<ResignModal
						isOpen={isOpen}
						onClose={onClose}
						resign={currentResign}
						onSuccess={fetchAllRequests}
					/>
					</VStack>
		</Flex>
	);
};
export default Resign;
