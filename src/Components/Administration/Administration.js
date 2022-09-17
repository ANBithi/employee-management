import {
	Flex,
	Text,
	VStack,
	Accordion,
	AccordionItem,
	AccordionButton,
	Box,
	AccordionPanel,
    AccordionIcon,
    Select,
    HStack,
    Input,
    Button
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import financeService from "../../services/finance.service";
import userService from "../../services/user.service";
import workBookService from "../../services/workBook.service";
import { MONTHLY_SALARY_TYPES } from "./administrationData";

const Administration = () => {
    const [allUsers, setAllUsers] = useState();
    const [addSalaryObj, setAddSalaryObj] = useState();
    useEffect(()=>{
        userService.getAllUsers().then((d)=>{
            console.log(d);
            setAllUsers(d);
        })
    }, [])

    const onSalaryDetailChange = (e) => {
        let { value, name } = e.target;
		var newObj = { ...addSalaryObj, [name]: value };
		setAddSalaryObj(newObj);
    }

    const onSalaryIssueClick = () => {
        let issueDate = new Date();
         workBookService.getTotalHours(addSalaryObj?.belongsTo).then((p)=>{
         workBookService.getTotalWorkDays(addSalaryObj?.belongsTo).then((d)=>{
                let obj = {...addSalaryObj, salaryIssueDate : issueDate, totalHours : p,totalWorkDays: d};
                setAddSalaryObj(obj);
               financeService.addFinance(obj).then((response)=> {
                if(response){
                    console.log ("finance added");
                }
               })
            });
        });
    }

	return (
		<Flex layerStyle="pageStyle">
			<VStack align="start" w="full" gap={2}>
				<Text layerStyle="sectionHeaderStyle">Administration</Text>
				<Accordion allowToggle w = "full">
					<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Add Employee
								</Box>
								<AccordionIcon />
							</AccordionButton>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left" w = "full">
									Add Salary
								</Box>
								<AccordionIcon />
							</AccordionButton>
						<AccordionPanel pb={4}>
                        <VStack  spacing = {2}>
                        <HStack layerStyle="inputStackStyle">
                        <Text w="20%"> Employee : </Text>
                        <Select w = "70%" 
                        name="belongsTo" 
                        onChange={onSalaryDetailChange}
                        >
                        {allUsers?.map((user, i) => {
						return (
							<option selected = {i} key={i} value={user.id}>
								{user.fullName}
							</option>
						);
					})}
                        </Select>
                        </HStack>
                        <HStack layerStyle="inputStackStyle">
                        <Text w="20%"> Salary Per Hour : </Text>
                        <Input name = "salaryPerHour" type = "number" layerStyle="inputStyle"
                        onChange={onSalaryDetailChange}
                        >
                        </Input>
                        </HStack>
                        <HStack layerStyle="inputStackStyle">
                        <Text w="20%"> Employee : </Text>
                        <Select w = "70%" 
                        name="type" 
                        onChange={onSalaryDetailChange}
                        >
                        {MONTHLY_SALARY_TYPES?.map((type, i) => {
						return (
							<option selected = {i} key={i} value={type.value}>
								{type.name}
							</option>
						);
					})}
                        </Select>
                        </HStack>
                        <Button onClick = {onSalaryIssueClick}>
                            Issue
                        </Button>
                        </VStack>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</VStack>
		</Flex>
	);
};

export default Administration;
