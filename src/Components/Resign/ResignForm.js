import { HStack, VStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
const ResignForm = ({ resignObj, setResignObj }) => {
	const [userSupervisor, setUserSupervisor] = useState();
	
	useEffect(()=>{
		userService.getUserSupervisor().then((d) => {
			setUserSupervisor(d);
			let obj = { ...resignObj, supervisor: d.id };
			setResignObj(obj);
		});
	}, [])
	const onInputChange = (e) => {
		let { value, name } = e.target;
		var newObj = { ...resignObj, [name]: value };
		setResignObj(newObj);
	};
	return (
		<VStack layerStyle="sectionStyle" align="start" w="full">
			<Text layerStyle="sectionHeaderStyle">Resign</Text>
			{/* reason input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Request To</Text>
				<Input
					defaultValue={userSupervisor?.fullName}
					readOnly={true}
					layerStyle="inputStyle"
				/>
			</HStack>

			{/* reason input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Reason</Text>
				<Input
					name="reason"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
			{/* resigningMonth input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Resigning Month</Text>
				<Input
					name="resignMonth"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
			{/* experience - here input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Experience with Us</Text>
				<Input
					name="experienceUs"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
			{/* Additional Info input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Additional Information</Text>
				<Input
					name="additionalInfo"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
			{/* achievement input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Achievements</Text>
				<Input
					name="achievements"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
			{/* complain input */}
			<HStack layerStyle="inputStackStyle">
				<Text w="20%">Complain if any</Text>
				<Input
					name="complain"
					layerStyle="inputStyle"
					onChange={onInputChange}
				/>
			</HStack>
		</VStack>
	);
};

export default ResignForm;
