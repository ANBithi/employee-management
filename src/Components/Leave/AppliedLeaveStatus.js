import { Flex, Grid, GridItem, Text, VStack, useColorModeValue, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../Helpers/userHelper";
import leaveService from "../../services/leave.service";
import { APPLIED_LEAVE_COLS } from "./leaveData";

const AppliedLeaveStatus = () => {
    const blockColor = useColorModeValue('primary.100', 'primary.500');
    const [leaveStatusData, setLeaveStatusData] = useState();
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        leaveService.getAppliedLeaveStatusData().then(data => {
            setLeaveStatusData(data);
        });
        
        setCurrentUser(getCurrentUser());
    }, [])
    return (
		<Flex layerStyle="pageStyle">
		<VStack w = "full" align = "flex-start">
        <Text layerStyle="sectionHeaderStyle">Applied Leave Status</Text>
			<Grid templateColumns='repeat(10, 1fr)'gap={1} w="full">
            {
                APPLIED_LEAVE_COLS.map((col, index)=>{
                    return(
                            <GridItem fontSize="14px" colSpan = {col.colSpan} align = "center" bg = {blockColor}>{col.label}</GridItem>
                    )

                })
                
            }
            {
                leaveStatusData?.map((data, index)=>{
                   return(
                    <>
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{currentUser.firstName} {currentUser.lastName}</GridItem>
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{data.supervisor}</GridItem>
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{data.reason}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{new Date(data.startDate).toLocaleDateString('en-US')}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{new Date(data.endDate).toLocaleDateString('en-US')}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{data.totalDays}</GridItem>
                    { 
                        data.firstHalf === true ?
                        <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>
                            First Half
                        </GridItem> 
                        : data.secondHalf === true? 
                        <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>
                            First Half
                        </GridItem> 
                        :
                        <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>
                            Full Day
                        </GridItem> 
                    }
                    </>
                   )
                })
            }
            </Grid>        
        </VStack>
		</Flex>
	);
}
export default AppliedLeaveStatus