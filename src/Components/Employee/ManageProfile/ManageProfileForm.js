import { HStack, VStack, Input, Text, Select} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../Helpers/userHelper";
const ManageProfileForm = ({ manageProfileObj, setManageProfileObj }) => {
	const [defaultValues, setDefaultValues] = useState();

	useEffect(()=>{
		let user = getCurrentUser();
		let manageUser = {
			employeeName : `${user.firstName} ${user.lastName}`,
			designation : user.designation,
			profileStatus : user.profileStatus,
		};
		console.log(manageUser);
		setDefaultValues(manageUser);
	}, [])

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
			{/* designation input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Designation</Text>
				<Input
					name="designation"
					value={defaultValues?.designation}
					layerStyle="inputStyle"
					disabled = "true"
				/>
			</HStack>
			{/* employee title input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Employee Name</Text>
				<Input
					name="employeeName"
					readOnly={true}
					defaultValue={defaultValues?.employeeName}
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
					readOnly={true}
					defaultValue={defaultValues?.profileStatus}
					layerStyle="inputStyle"
					onChange={onManageProfileChange}
				/>
			</HStack>
		</VStack>
	);
};

export default ManageProfileForm;
