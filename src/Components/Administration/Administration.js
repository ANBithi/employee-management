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
	Button,
	useToast,
    Tag,
    TagCloseButton,
    TagLabel
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CompanyService from "../../services/company.service";
import financeService from "../../services/finance.service";
import userService from "../../services/user.service";
import workBookService from "../../services/workBook.service";
import { MONTHLY_SALARY_TYPES } from "./administrationData";

const Administration = () => {
	const [allUsers, setAllUsers] = useState();
	const [addSalaryObj, setAddSalaryObj] = useState();
	const [addUserObj, setAddUserObj] = useState();
	const [addHoliday, setAddHoliday] = useState([]);
	const toast = useToast();
	useEffect(() => {
		userService.getAllUsers().then((d) => {
			console.log(d);
			setAllUsers(d);
		});
	}, []);

	const onSalaryDetailChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...addSalaryObj, [name]: value };
		setAddSalaryObj(newObj);
	};

	const onAddUserChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...addUserObj, [name]: value };
		setAddUserObj(newObj);
	};
	const onHolidayAddChange = (e) => {
		let { value } = e.target;
		let list = [...addHoliday, new Date(value)];
		setAddHoliday(list);
	};

	const onAddUserClick = () => {
		console.log(addUserObj);
		userService.createUser(addUserObj).then((d) => {
			if (d.isCreated) {
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
			} else {
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
		});
	};

	const onSalaryIssueClick = () => {
		let issueDate = new Date();
		workBookService.getTotalHours(addSalaryObj?.belongsTo).then((p) => {
			workBookService
				.getTotalWorkDays(addSalaryObj?.belongsTo)
				.then((d) => {
					let obj = {
						...addSalaryObj,
						salaryIssueDate: issueDate,
						totalHours: p,
						totalWorkDays: d,
					};
					setAddSalaryObj(obj);
					financeService.addFinance(obj).then((response) => {
						if (response) {
							console.log("finance added");
						}
					});
				});
		});
	};
    const onDayRemove = (index) => {
      let arr = [...addHoliday];
      arr = arr.filter((x, i)=> i !== index);
      setAddHoliday(arr);
    }
	const onAddHolidayClick = () => {
		CompanyService.addHolidays(addHoliday).then(d=>{
            if (d) {
				setAddHoliday([]);
				toast({
					containerStyle: {
						fontSize: "14px",
						fontWeight: "normal",
					},
					title: "Holidays have been added.",
					position: "bottom-right",
					variant: "subtle",
					status: "success",
					duration: 1000,
					isClosable: true,
				});
			} else {
				toast({
					containerStyle: {
						fontSize: "14px",
						fontWeight: "normal",
					},
					title: "Something went wrong.",
					position: "bottom-right",
					variant: "subtle",
					status: "error",
					duration: 1000,
					isClosable: true,
				});
			}
        })
	};
	return (
		<Flex layerStyle="pageStyle">
			<VStack align="start" w="full" gap={2}>
				<Text layerStyle="sectionHeaderStyle">Administration</Text>
				<Accordion allowToggle w="full">
					<AccordionItem>
						<AccordionButton _expanded={{ fontWeight: "bold" }}>
							<Box flex="1" textAlign="left">
								Add Employee
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<VStack spacing={2}>
								{/* firstName input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">First Name</Text>
									<Input
										name="firstName"
										layerStyle="inputStyle"
										onChange={onAddUserChange}
									/>
								</HStack>
								{/* lastName input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Last Name</Text>
									<Input
										name="lastName"
										layerStyle="inputStyle"
										onChange={onAddUserChange}
									/>
								</HStack>
								{/* email input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Email</Text>
									<Input
										name="email"
										layerStyle="inputStyle"
										onChange={onAddUserChange}
									/>
								</HStack>
								{/* password input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Password</Text>
									<Input
										name="password"
										type="password"
										layerStyle="inputStyle"
										onChange={onAddUserChange}
									/>
								</HStack>
								{/* role input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Role</Text>
									<Select
										name="role"
										w="70%"
										placeholder="Select a role"
										onChange={onAddUserChange}
									>
										<option value="admin">Admin</option>
										<option value="employee">
											Employee
										</option>
									</Select>
								</HStack>

								{/* designation input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Designation</Text>
									<Input
										name="designation"
										layerStyle="inputStyle"
										onChange={onAddUserChange}
									/>
								</HStack>
								{/* profileStatus input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Profile Status</Text>
									<Select
										name="profileStatus"
										w="70%"
										placeholder="Select a status"
										onChange={onAddUserChange}
									>
										<option value="Active">Active</option>
										<option value="Inactive">
											Inactive
										</option>
									</Select>
								</HStack>
								{/* reportsTo input */}
								<HStack layerStyle="inputStackStyle">
									<Text w="20%">Reports To</Text>
									<Select
										name="reportsTo"
										w="70%"
										placeholder="Select an employee"
										onChange={onAddUserChange}
									>
										{allUsers?.map((user, i) => {
											return (
												<option
													selected={i}
													key={i}
													value={user.id}
												>
													{user.fullName}
												</option>
											);
										})}
									</Select>
								</HStack>
								<Button onClick={onAddUserClick}>Add</Button>
							</VStack>
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<AccordionButton>
							<Box flex="1" textAlign="left" w="full">
								Add Salary
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<VStack spacing={2}>
								<HStack layerStyle="inputStackStyle">
									<Text w="20%"> Employee : </Text>
									<Select
										w="70%"
										name="belongsTo"
										placeholder="Select an employee"
										onChange={onSalaryDetailChange}
									>
										{allUsers?.map((user, i) => {
											return (
												<option
													selected={i}
													key={i}
													value={user.id}
												>
													{user.fullName}
												</option>
											);
										})}
									</Select>
								</HStack>
								<HStack layerStyle="inputStackStyle">
									<Text w="20%"> Salary Per Hour : </Text>
									<Input
										name="salaryPerHour"
										type="number"
										layerStyle="inputStyle"
										onChange={onSalaryDetailChange}
									></Input>
								</HStack>
								<HStack layerStyle="inputStackStyle">
									<Text w="20%"> Salary Type : </Text>
									<Select
										w="70%"
										placeholder="Select salary type"
										name="type"
										onChange={onSalaryDetailChange}
									>
										{MONTHLY_SALARY_TYPES?.map(
											(type, i) => {
												return (
													<option
														key={i}
														value={type.value}
													>
														{type.name}
													</option>
												);
											}
										)}
									</Select>
								</HStack>
								<Button onClick={onSalaryIssueClick}>
									Issue
								</Button>
							</VStack>
						</AccordionPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionButton>
							<Box flex="1" textAlign="left" w="full">
								Add Holiday
							</Box>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<VStack spacing={2}>
								<HStack layerStyle="inputStackStyle">
									<Text w="20%"> Pick a day </Text>
									<Input
										name="holidayDate"
										type="date"
										layerStyle="inputStyle"
										onChange={onHolidayAddChange}
									></Input>
								</HStack>
                                <HStack spacing={4}>
										{addHoliday?.map((day, index) => {
											return (
												<Tag
													size="md"
													borderRadius="full"
													variant="solid"
                                                    key = {index}
													colorScheme="green"
												>
													<TagLabel>{day.toLocaleDateString('en-US')}</TagLabel>
													<TagCloseButton onClick={()=>{onDayRemove(index)}}/>
												</Tag>
											);
										})}
									</HStack>
								<Button onClick={onAddHolidayClick}>Add</Button>
							</VStack>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</VStack>
		</Flex>
	);
};

export default Administration;
