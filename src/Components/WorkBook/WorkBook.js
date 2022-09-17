import {Flex, Text, VStack, Grid, GridItem, HStack, Input, Select, Button, useToast} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import workBookService from "../../services/workBook.service";
import { WORK_TYPE, HOURS_ENTRY_COL } from "./workBookData";
const WorkBook = () => {
    const [workBookObj, setWorkBookObj] = useState();
	const [workBookData, setWorkBookData] = useState([]);
	const [availHours, setAvailHours] = useState(true);
	const toast = useToast();


	const fetchData =()=>{
		workBookService.getWorkBookData().then(d => {
			setWorkBookData(d);
		})
	}

	useEffect(()=>{
			fetchData();
	}, [])

    const onInputChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...workBookObj, [name]: value };
		setWorkBookObj(newObj);
	};
    const onSaveButtonClick = () => {
		console.log(workBookObj);
		   workBookService.entryWorkHours(workBookObj).then((d) => {
				if (d === true) {
					fetchData();
					toast({
						containerStyle: {
							fontSize: "14px",
							fontWeight: "normal",
						},
						title: "Saved",
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
						title: "Failed To Save",
						position: "bottom-right",
						variant: "subtle",
						status: "error",
						duration: 1000,
						isClosable: true,
					});
				}
			});
	}
    return (
		<Flex layerStyle="pageStyle">
			<VStack w="full" align="flex-start">
				<Text layerStyle="sectionHeaderStyle" mb = "8px" >Input Work Hours</Text>
				<HStack w="full" pb = "2%">
					<Input
						name="date"
						w="30%"
						h ="40px"
						type="date"
						onChange={onInputChange}
					/>
					<Select
						name="workType"
						w="30%"
						h ="40px"
						onChange={(e) => {
							let { value } = e.target;
							if (value === "On Leave" || value === "Holiday") {
								setAvailHours(false);
							}
							else {
								setAvailHours(true);
							}
							onInputChange(e);
						}}
						placeholder="Choose where you worked"
					>
						{WORK_TYPE.map((option, index) => {
							return (
								<option key={index} value={option.value}>
									{option.label}
								</option>
							);
						})}
					</Select>
					{availHours === true ? (
						<Input
							name="hours"
							w="30%"
							h ="40px"
							type="number"
							onChange={onInputChange}
						/>
					) : (
						<HStack w = "30%" justify= "center" gap = "6%">
							<Input
							name="days"
							w="70%"
							h ="40px"
							type="number"
							onChange={onInputChange}
						/>
						<Text>Days</Text>
							</HStack>
					)}
					<Button w = "10%" onClick={onSaveButtonClick}>Save</Button>
				</HStack>
				<Text layerStyle="sectionHeaderStyle" >Work Book</Text>
				<Grid pt = "8px" templateColumns="repeat(3, 1fr)" gap={2} w="full">
					{HOURS_ENTRY_COL.map((col, index) => {
						return (
							<GridItem
								key={index}
								fontWeight="bold"
								layerStyle="gridItemStyle"
								colSpan={col.colSpan}
								align="center"
							>
								{col.label}
							</GridItem>
						);
					})}
				</Grid>
				{workBookData?.map((data) => {
					return (
						<Grid templateColumns="repeat(3, 1fr)" gap={2} w="full">
							<GridItem
								layerStyle="gridItemStyle"
								colSpan={1}
								align="center"
							>
								{data.date}
							</GridItem>
							<GridItem
								layerStyle="gridItemStyle"
								colSpan={1}
								align="center"
							>
								{data.workType}
							</GridItem>
							<GridItem
								layerStyle="gridItemStyle"
								colSpan={1}
								align="center"
							>
								{data.hours}
							</GridItem>
						</Grid>
					);
				})}
			</VStack>
		</Flex>
	);
}
export default WorkBook;