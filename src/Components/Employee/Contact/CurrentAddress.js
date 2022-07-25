import { HStack, VStack, Input, Text } from "@chakra-ui/react";
const CurrentAddress = ({ currentAddressObj, setCurrentAddressObj }) => {
	const onCurrentAddressChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...currentAddressObj, [name]: value };
		setCurrentAddressObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align = "start">
            <Text layerStyle="sectionHeaderStyle" >Present Address</Text>
			{/* address input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Address</Text>
				<Input
					name="address"
					layerStyle="inputStyle"
					placeholder="Address"
					onChange={onCurrentAddressChange}
				/>
			</HStack>
			{/* city input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">City</Text>
				<Input
					name="city"
					layerStyle="inputStyle"
					placeholder="City"
					onChange={onCurrentAddressChange}
				/>
			</HStack>
			{/* zip input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">ZIP</Text>
				<Input
					name="zip"
					layerStyle="inputStyle"
					placeholder="ZIP"
                    type = "number"
					onChange={onCurrentAddressChange}
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
					onChange={onCurrentAddressChange}
				/>
			</HStack>
			{/* phone input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Phone</Text>
				<Input
					name="phone"
					layerStyle="inputStyle"
					placeholder="Phone"
					type="number"
					onChange={onCurrentAddressChange}
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
					onChange={onCurrentAddressChange}
				/>
			</HStack>
            {/* alt email input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Alternate Email</Text>
				<Input
					name="altEmail"
					layerStyle="inputStyle"
					placeholder="Alternate email"
					type="email"
					onChange={onCurrentAddressChange}
				/>
			</HStack>
		</VStack>
	);
};

export default CurrentAddress;
