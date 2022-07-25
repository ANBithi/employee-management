import { HStack, VStack, Input, Text, Select} from "@chakra-ui/react";
const ManageProfileForm = ({ manageProfileObj, setManageProfileObj }) => {
	const onManageProfileChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...manageProfileObj, [name]: value };
		setManageProfileObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align="start">
			<Text layerStyle="sectionHeaderStyle">
				Manage Profile
			</Text>
			{/* employee name input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Employee Name</Text>
				<Select
					name="employeeName"
					w="70%"
					onChange={onManageProfileChange}
				/>
			</HStack>
			{/* employee title input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Employee</Text>
				<Input
					name="employee"
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
			{/* old password input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Old Password</Text>
				<Input
					name="oldPassword"
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
			{/* new password input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">New Password</Text>
				<Input
					name="newPassword"
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
			{/* confirm password input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Confirm Password</Text>
				<Input
					name="confirmPassword"
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
			{/* profile status input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Profile Status</Text>
				<Input
					name="profileStatus"
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
		</VStack>
	);
};

export default ManageProfileForm;
