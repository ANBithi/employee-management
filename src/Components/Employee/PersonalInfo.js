import { HStack, Select, VStack, Input, Text, Button,useToast, Flex } from "@chakra-ui/react";
import { useState } from "react";
import employeeService from "../../services/employee.service";
import {
	BLOOD_GROUP_OPTIONS,
	MARITAL_STATUS_OPTIONS,
	NATIONALITY_OPTION,
	RELIGION_OPTION,
	GENDER_OPTION,
} from "./EmployeeData/personalData";
const PersonalInfo = () => {
	const [userPin, setUserPin] = useState();
	const [salutation, setSalutation] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
    const [nickName, setNickName] = useState();
	const [fatherName, setFatherName] = useState();
	const [motherName, setMotherName] = useState();
	const [gender, setGender] = useState();
	const [birthDate, setBirthDate] = useState();
	const [birthPlace, setBirthPlace] = useState();
	const [bloodGroup, setBloodGroup] = useState();
	const [nationality, setNationality] = useState();
	const [religion, setReligion] = useState();
	const [maritalStatus, setMaritalStatus] = useState();
	const [spouseName, setSpouseName] = useState();
	const [numberOfSons, setNumberOfSons] = useState();
	const [numberOfDaughters, setNumberOfDaughters] = useState();
	const [cardNo, setCardNo] = useState();
	const [tinNo, setTinNo] = useState();
	const [passportNo, setPassportNo] = useState();
	const [drivingLicense, setDrivingLicense] = useState();
	const [nidNumber, setNidNumber] = useState();
	const [extraCurr, setExtraCurr] = useState();
	const [remarks, setRemarks] = useState();
    const toast =  useToast();

	const onUserPinChange = (e) => {
		let value = e.target.value;
		setUserPin((prevUserPin) => (prevUserPin = value));
	};
	const onSalutationChange = (e) => {
		let value = e.target.value;
		setSalutation((prevSal) => (prevSal = value));
	};
	const onFirstChange = (e) => {
		let value = e.target.value;
		setFirstName((prevFirst) => (prevFirst = value));
	};
	const onLastChange = (e) => {
		let value = e.target.value;
		setLastName((prevLast) => (prevLast = value));
	};
    const onNickNameChange = (e) => {
		let value = e.target.value;
		setNickName((prevNick) => (prevNick = value));
	};
	const onFatherNameChange = (e) => {
		let value = e.target.value;
		setFatherName((prevFather) => (prevFather = value));
	};
	const onMotherNameChange = (e) => {
		let value = e.target.value;
		setMotherName((prevMother) => (prevMother = value));
	};
	const onGenderChange = (e) => {
		let value = e.target.value;
		setGender((prevGender) => (prevGender = value));
	};
	const onBirthDateChange = (e) => {
		let value = e.target.value;
		setBirthDate((prevDate) => (prevDate = value));
	};
	const onBirthPlaceChange = (e) => {
		let value = e.target.value;
		setBirthPlace((prevPlace) => (prevPlace = value));
	};
	const onBloodGroupChange = (e) => {
		let value = e.target.value;
		setBloodGroup((prevGroup) => (prevGroup = value));
	};
	const onNationalityChange = (e) => {
		let value = e.target.value;
		setNationality((prevNat) => (prevNat = value));
	};
	const onReligionChange = (e) => {
		let value = e.target.value;
		setReligion((prevRel) => (prevRel = value));
	};
	const onMaritalStatusChange = (e) => {
		let value = e.target.value;
		setMaritalStatus((prevStatus) => (prevStatus = value));
	};
	const onSpouseNameChange = (e) => {
		let value = e.target.value;
		setSpouseName((prevSpouse) => (prevSpouse = value));
	};
	const onSonsNumberChange = (e) => {
		let value = e.target.value;
		setNumberOfSons((prevNum) => (prevNum = value));
	};
	const onDaughterNumChange = (e) => {
		let value = e.target.value;
		setNumberOfDaughters((prevNum) => (prevNum = value));
	};
	const onCardNumberChange = (e) => {
		let value = e.target.value;
		setCardNo((prevNo) => (prevNo = value));
	};
	const onTinNumberChange = (e) => {
		let value = e.target.value;
		setTinNo((prevNo) => (prevNo = value));
	};
	const onPassportNumberChange = (e) => {
		let value = e.target.value;
		setPassportNo((prevNo) => (prevNo = value));
	};
	const onDrivingLicenseChange = (e) => {
		let value = e.target.value;
		setDrivingLicense((prevLicense) => (prevLicense = value));
	};
	const onNidNumberChange = (e) => {
		let value = e.target.value;
		setNidNumber((prevNo) => (prevNo = value));
	};
	const onExtraCurrChange = (e) => {
		let value = e.target.value;
		setExtraCurr((prevCurr) => (prevCurr = value));
	};
	const onRemarksChange = (e) => {
		let value = e.target.value;
		setRemarks((prevRem) => (prevRem = value));
	};

    const onUpdateClick =()=>{
        let updatedUser = {
			userPin,
            salutation,
			firstName,
			lastName,
            nickName,
			fatherName,
			motherName,
            gender,
            birthDate,
            birthPlace,
            bloodGroup,
            nationality,
            religion,
            maritalStatus,
            spouseName,
            numberOfSons,
            numberOfDaughters,
            cardNo,
            tinNo,
            passportNo,
            drivingLicense,
            nidNumber
		};

        if(employeeService.updatePersonalInfo(updatedUser)){
            toast({
                containerStyle: {
                    fontSize: "14px",
                    fontWeight: "normal"},
                title: 'Profile Updated.',
                position: "bottom-right",
                variant : "subtle",
                status: 'success',
                duration: 1000,
                isClosable: true,
              })
        }

    }

	return (
		<Flex layerStyle="pageStyle">
			<VStack  w="full" fontSize="14px" align = "flex-start">
				<Text fontWeight="bold" fontSize= "16px">Personal Information</Text>
				<HStack w="full">
					<VStack layerStyle="sectionStyle" align="flex-start">
						{/* pin input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Pin
							</Text>
							<Input
								size="sm"
								mr="1%"
								w="70%"
								placeholder="Enter your pin"
								type="number"
								onChange={onUserPinChange}
                                borderColor = "primary.200"
                                
							/>
						</HStack>
						{/* salutation input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Salutation
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Salutation"
								maxLength="60"
								onChange={onSalutationChange}
							/>
						</HStack>
						{/* first name input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								First Name
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter your first name"
								onChange={onFirstChange}
							/>
						</HStack>
						{/* last name input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Last Name
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter your last name"
								onChange={onLastChange}
							/>
						</HStack>
						{/* nickname input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Nickname
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter your nickname"
                                onChange={onNickNameChange}
							/>
						</HStack>
						{/* father's name input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Father's Name
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter your father's name"
								onChange={onFatherNameChange}
							/>
						</HStack>
						{/* mother's name input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Mother's name
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter your mother's name"
								onChange={onMotherNameChange}
							/>
						</HStack>
						{/* gender input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Gender
							</Text>
							<Select
								w="70%"
								placeholder="Select gender"
								onChange={onGenderChange}
							>
								{GENDER_OPTION.map((option, index) => {
									return (
										<option
											key={index}
											value={option.value}
										>
											{option.label}
										</option>
									);
								})}
							</Select>
						</HStack>
						{/* date of birth input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Date of Birth
							</Text>
							<Input
								layerStyle="inputStyle"
								type="date"
								onChange={onBirthDateChange}
							/>
						</HStack>
						{/* place of birth input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Place of Birth
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Location"
								onChange={onBirthPlaceChange}
							/>
						</HStack>
						{/* blood group input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Blood Group
							</Text>
							<Select
								w="70%"
								placeholder="Select blood group"
								onChange={onBloodGroupChange}
							>
								{BLOOD_GROUP_OPTIONS.map((option, index) => {
									return (
										<option
											key={index}
											value={option.value}
										>
											{option.label}
										</option>
									);
								})}
							</Select>
						</HStack>
					</VStack>
					<VStack layerStyle="sectionStyle" align="flex-start">
						{/* nationality input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Nationality
							</Text>
							<Select
								w="70%"
								placeholder="Select nationality"
								onChange={onNationalityChange}
							>
								{NATIONALITY_OPTION.map((option, index) => {
									return (
										<option
											key={index}
											value={option.value}
										>
											{option.label}
										</option>
									);
								})}
							</Select>
						</HStack>
						{/* religion input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Religion
							</Text>
							<Select
								w="70%"
								placeholder="Select religion"
								onChange={onReligionChange}
							>
								{RELIGION_OPTION.map((option, index) => {
									return (
										<option
											key={index}
											value={option.value}
										>
											{option.label}
										</option>
									);
								})}
							</Select>
						</HStack>
						{/* marital status input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Marital Status
							</Text>
							<Select
								w="70%"
								placeholder="Select marital status"
								onChange={onMaritalStatusChange}
							>
								{MARITAL_STATUS_OPTIONS.map((option, index) => {
									return (
										<option
											key={index}
											value={option.value}
										>
											{option.label}
										</option>
									);
								})}
							</Select>
						</HStack>
						{/* spouse input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Spouse Name
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Name of spouse"
								onChange={onSpouseNameChange}
							/>
						</HStack>
						{/* sons input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Sons
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Number of sons"
								type="number"
								onChange={onSonsNumberChange}
							/>
						</HStack>
						{/* daughter input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Daughter
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Number of daughter"
								type="number"
								onChange={onDaughterNumChange}
							/>
						</HStack>
						{/* card no input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Card No
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter card no"
								type="number"
								onChange={onCardNumberChange}
							/>
						</HStack>
						{/* TIN input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								TIN
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter TIN number"
								onChange={onTinNumberChange}
							/>
						</HStack>
						{/* passport number input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Passport No
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter passport number"
								type="number"
								onChange={onPassportNumberChange}
							/>
						</HStack>
						{/* driving license input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								Driving License
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter driving license"
								onChange={onDrivingLicenseChange}
							/>
						</HStack>
						{/* NID input */}
						<HStack layerStyle="inputStackStyle">
							<Text w="20%" >
								National ID
							</Text>
							<Input
								layerStyle="inputStyle"
								placeholder="Enter NID number"
								type="number"
								onChange={onNidNumberChange}
							/>
						</HStack>
					</VStack>
				</HStack>
               <VStack w = "full">
                 {/* extra curriculum */}
				<HStack w="full" h="50%">
					<Text w="20%" >
						Extra Curriculum
					</Text>
					<Input
						size="lg"
						layerStyle="inputStyle"
						fontSize="14px"
						placeholder="hobbies, activities"
						maxLength="70"
						onChange={onExtraCurrChange}
					/>
				</HStack>
                {/* remarks */}
				<HStack w="full" h="50%">
					<Text w="20%" >
						Remarks
					</Text>
					<Input
						layerStyle="inputStyle"
						placeholder="Remarks"
						maxLength="70"
						onChange={onRemarksChange}
					/>
				</HStack>
               </VStack>
               <HStack layerStyle="pageButtonStyle">
                <Button fontWeight="normal" onClick={onUpdateClick}>Update</Button>
                <Button fontWeight="normal">Refresh</Button>
               </HStack>
			</VStack>
		</Flex>
	);
};
export default PersonalInfo;
