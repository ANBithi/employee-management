function updatePersonalInfo(updatedInfo) {
	return true;
}

function updateContactInfo(updatedInfo) {
	return true;
}
function saveQualification(qualification) {
	return true;
}
function saveExperience(experience) {
	return true;
}
function saveAcademicInfo(academic) {
	return true;
}
function updateManageProfile(profile){
        return true;
}
const employeeService = {
	updatePersonalInfo,
	updateContactInfo,
	saveQualification,
	saveExperience,
        saveAcademicInfo,
        updateManageProfile
};

export default employeeService;
