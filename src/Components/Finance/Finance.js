import {Flex, Text, VStack, Grid, GridItem, HStack, Input, Select, Button, useToast, Divider} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { getCurrentUserId } from "../../Helpers/userHelper";
import financeService from "../../services/finance.service";
import workBookService from "../../services/workBook.service";

const Finance = () => {
    const [totalHours, setTotalHours] = useState();
	const [monthlyFinance, setMonthlyFinance] = useState();
	const toast = useToast();
    const fetchData = () => {
		let belongsTo = getCurrentUserId();
        workBookService.getTotalHours(belongsTo).then((d)=>{
                setTotalHours(d);
        })
		financeService.getFinanceMonthly(belongsTo).then(d=>{
			if(d.responseStatus === true) {
				setMonthlyFinance(d.response);
			}
			else {
				toast({
					containerStyle: {
						fontSize: "14px",
						fontWeight: "normal",
					},
					title: d.message,
					position: "bottom-right",
					variant: "subtle",
					status: "error",
					duration: 1000,
					isClosable: true,
				});
			}
		})
    }
    useEffect(()=>{
        fetchData();
    })
    return (
		<Flex layerStyle="pageStyle">
			<VStack align="start" w="50%" gap={2}>
				<Text layerStyle="sectionHeaderStyle">Finance</Text>
				<Divider w="full"></Divider>
				<HStack>
					<Text fontWeight="bold">Total Work Hours:</Text>
					{totalHours ? (<Text>{totalHours}</Text>):(<Text>0</Text>)}
				</HStack>
				<Divider w="full"></Divider>
				{
					(monthlyFinance !== null && monthlyFinance !== undefined) && (
						<>
						<HStack>
				<Text>Salary Issue Date:</Text>
				<Text>{monthlyFinance.salaryIssueDate}</Text>
				</HStack>
				<Divider w="full"></Divider>
				<HStack>
					<Text>Month:</Text>
					<Text>{monthlyFinance.month}</Text>
				</HStack>
				<Divider w="full"></Divider>
				<HStack>
					<Text>Year:</Text>
					<Text>{monthlyFinance.year}</Text>
				</HStack>
				<Divider w="full"></Divider>
				<HStack>
					<Text>Salary:</Text>
					<Text>{monthlyFinance.salary}</Text>
				</HStack>
				<Divider w="full"></Divider>
						</>
					)
				}
			</VStack>
		</Flex>
	);
}
export default Finance;