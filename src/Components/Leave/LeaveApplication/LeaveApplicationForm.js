import { useEffect, useState } from "react";
import {
	HStack,
	VStack,
	Input,
	Text,
	Select,
	Radio,
	Box,
	RadioGroup,
	CheckboxGroup,
	Checkbox,
} from "@chakra-ui/react";
import { LEAVE_TYPE } from "../leaveData";
import leaveService from "../../../services/leave.service";
import { getEndDate, getStartDate, getTotalDays } from "../../util";
const LeaveApplicationForm = ({
	leaveApplicationObj,
	setLeaveApplicationObj,
}) => {
	const [supervisors, setSupervisors] = useState();
	const [isHalfDay, setIsHalfDay] = useState(false);
	const [isFirstHalf, setIsFirstHalf] = useState(false);
	const [isSecondHalf, setIsSecondHalf] = useState(false);
	const [dateData, setDateData] = useState({
		startDate: "",
		endDate: "",
		totalDays: 0,
		halfDay: false,
		firstHalf: false,
		secondHalf: false,
	});

	useEffect(() => {
		setSupervisors(leaveService.getSupervisors());
	}, []);

	const onHalfDayOptionChange = (e) => {
		let { name, checked } = e.target;
		var date = { ...dateData, [name]: checked };
		setIsFirstHalf((prevVal) => (prevVal = date.firstHalf));
		setIsSecondHalf((prevVal) => (prevVal = date.secondHalf));
		setDateData(date);

		var newObj = { ...leaveApplicationObj, leaveDate: date };
		setLeaveApplicationObj(newObj);
	};

	const isHalfDayChecked = (e) => {
		let { name, checked } = e.target;
		var date = { ...dateData, [name]: checked };
		setIsHalfDay((prevVal) => (prevVal = checked));
		setDateData(date);

		var newObj = { ...leaveApplicationObj, leaveDate: date };
		setLeaveApplicationObj(newObj);
	};

	const onFromDateChange = (e) => {
		let { value, name } = e.target;

		var date = { ...dateData, [name]: value };

		if (date.endDate && date.startDate) {
			date.totalDays = getTotalDays(date.endDate, date.startDate);
		}
		if (date.startDate && date.totalDays) {
			date.endDate = getEndDate(date.startDate, date.totalDays);
		}
		if (date.endDate && date.totalDays) {
			date.startDate = getStartDate(date.endDate, date.totalDays);
		}
		setDateData(date);

		var newObj = { ...leaveApplicationObj, leaveDate: date };
		setLeaveApplicationObj(newObj);
	};
	const onLeaveApplicationChange = (e) => {
		let { value, name } = e.target;
		if (name === "supervisor") {
			console.log(value);
		}
		var newObj = { ...leaveApplicationObj, [name]: value };
		setLeaveApplicationObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align="start">
			<Text layerStyle="sectionHeaderStyle">Leave Application</Text>
			{/* leave type input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Leave Type</Text>
				<Select
					name="leaveType"
					w="70%"
					placeholder="Select Leave Type"
					onChange={onLeaveApplicationChange}
				>
					{LEAVE_TYPE.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						);
					})}
				</Select>
			</HStack>
			{/* from date input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Start Date</Text>
				<Input
					name="startDate"
					layerStyle="inputStyle"
					type="date"
					value={dateData.startDate}
					onChange={onFromDateChange}
				/>
			</HStack>
			{/* days input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Days</Text>
				<Input
					name="totalDays"
					value={dateData.totalDays}
					layerStyle="inputStyle"
					onChange={onFromDateChange}
				/>
			</HStack>
			{/* to date input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">End Date</Text>
				<Input
					name="endDate"
					value={dateData.endDate}
					layerStyle="inputStyle"
					type="date"
					onChange={onFromDateChange}
				/>
			</HStack>
			<HStack w="55%" alignSelf="center" justify="space-between">
				if()
				<Checkbox
					name="halfDay"
					size="sm"
					alignSelf="center"
					onChange={isHalfDayChecked}
					isChecked={isHalfDay}
				>
					Half Day
				</Checkbox>
				{isHalfDay === true && (
					<CheckboxGroup>
						{isSecondHalf === false && (
							<Checkbox
								name="firstHalf"
								size="sm"
								onChange={onHalfDayOptionChange}
								isChecked={isFirstHalf}
							>
								First Half
							</Checkbox>
						)}
						{isFirstHalf === false && (
							<Checkbox
								name="secondHalf"
								size="sm"
								onChange={onHalfDayOptionChange}
								isChecked={isSecondHalf}
								ml="1rem"
							>
								Second Half
							</Checkbox>
						)}
					</CheckboxGroup>
				)}
			</HStack>
			{/* supervisor input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Supervisor</Text>
				<Select
					name="supervisor"
					w="70%"
					onChange={onLeaveApplicationChange}
					placeholder="Select Supervisor"
				>
					{supervisors?.map((supervisor, i) => {
						return (
							<option key={i} value={supervisor}>
								{supervisor.name}
							</option>
						);
					})}
				</Select>
			</HStack>
			{/* reason input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Reason</Text>
				<Input
					size="lg"
					fontSize="14px"
					name="reason"
					layerStyle="inputStyle"
					onChange={onLeaveApplicationChange}
				/>
			</HStack>
		</VStack>
	);
};

export default LeaveApplicationForm;
