import { Flex, Grid, GridItem, Text, VStack, useColorModeValue, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import leaveService from "../../services/leave.service";
import { APPLIED_LEAVE_COLS } from "./leaveData";

const AppliedLeaveStatus = () => {
    const blockColor = useColorModeValue('primary.100', 'primary.500');
    const [leaveStatusData, setLeaveStatusData] = useState();

    useEffect(()=>{
        let data = leaveService.getAppliedLeaveStatusData();
        setLeaveStatusData(data);
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
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{data.employeeName}</GridItem>
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{data.supervisorName}</GridItem>
                    <GridItem fontSize="14px" colSpan={2} align = "center" bg = {blockColor}>{data.reason}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{data.startDate}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{data.endDate}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>{data.numberOfDays}</GridItem>
                    <GridItem fontSize="14px" colSpan={1} align = "center" bg = {blockColor}>
                    <Checkbox></Checkbox>
                    </GridItem>
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