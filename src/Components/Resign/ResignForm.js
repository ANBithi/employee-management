import { HStack, VStack, Input, Text} from "@chakra-ui/react";
const ResignForm = ({ resignObj, setResignObj }) => {
	const onResignChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...resignObj, [name]: value };
		setResignObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align="start" w= "full">
			<Text layerStyle="sectionHeaderStyle">
				Resign
			</Text>
			{/* reason input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Reason</Text>
				<Input
					name="reason"
					layerStyle="inputStyle"
					onChange={onResignChange}
				/>
			</HStack>
			{/* resigningMonth input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Resigning Month</Text>
				<Input
					name="resignMonth"
					layerStyle="inputStyle"
					onChange={onResignChange}
				/>
			</HStack>
			{/* experience - here input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Experience with Us</Text>
				<Input
					name="experienceUs"
					layerStyle="inputStyle"
					onChange={onResignChange}
				/>
			</HStack>
			{/* Additional Info input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Additional Information</Text>
				<Input
					name="additionalInfo"
					layerStyle="inputStyle"
					onChange={onResignChange}
				/>
			</HStack>
			{/* achievement input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Achievements</Text>
				<Input
					name="achievements"
					layerStyle="inputStyle"
					onChange={onResignChange}
				/>
			</HStack>
		</VStack>
	);
};

export default ResignForm;
