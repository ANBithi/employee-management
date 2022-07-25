import { HStack, VStack, Input, Text } from "@chakra-ui/react";
const EmergencyContact = ({ emergencyContactObj, setEmergencyContactObj }) => {
	const onEmergencyContactChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...emergencyContactObj, [name]: value };
		setEmergencyContactObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align = "start">
            <Text layerStyle= "sectionHeaderStyle">Emergency Contact</Text>
            {/* name input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Name</Text>
				<Input
					name="name"
					layerStyle="inputStyle"
					placeholder="Name"
					onChange={onEmergencyContactChange}
				/>
			</HStack>
            {/* relation input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Relation</Text>
				<Input
					name="relation"
					layerStyle="inputStyle"
					placeholder="Relation"
					onChange={onEmergencyContactChange}
				/>
			</HStack>
			{/* address input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Address</Text>
				<Input
					name="address"
					layerStyle="inputStyle"
					placeholder="Address"
					onChange={onEmergencyContactChange}
				/>
			</HStack>
			{/* mobile input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Mobile</Text>
				<Input
					name="mobile"
					layerStyle="inputStyle"
					placeholder="Mobile"
					type="number"
					onChange={onEmergencyContactChange}
				/>
			</HStack>
            {/* email input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Email</Text>
				<Input
					name="email"
					layerStyle="inputStyle"
					placeholder="Email"
					type="email"
					onChange={onEmergencyContactChange}
				/>
			</HStack>
		</VStack>
	);
};

export default EmergencyContact;
