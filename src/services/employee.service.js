import { getCurrentUserId } from "../Helpers/userHelper";

function updatePersonalInfo(updatedInfo) {
	return true;
}
async function getEmployeeContact(type) {
	let request = {
		type: type,
		belongsTo: getCurrentUserId(),
	}

	let response =  await fetch(`http://localhost:5000/api/employee/getContact?belongsTo=${request.belongsTo}&type=${request.type}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		var contactResponse = await response.json();  
		return contactResponse;
		}    
}

async function getEmployeeAddress(type) {
	let request = {
		type: type,
		belongsTo: getCurrentUserId(),
	}

	let response =  await fetch(`http://localhost:5000/api/employee/getAddress?belongsTo=${request.belongsTo}&type=${request.type}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		var addressResponse = await response.json();  
		return addressResponse;
		}    
}

async function addContact(contact, type) {
	let request = {...contact, type : type, belongsTo : getCurrentUserId()};
	
	let response =  await fetch("http://localhost:5000/api/employee/addContact",{
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(request)
	  })
	
	  if (response.ok){
		var addContactResponse = await response.json();  
		if (addContactResponse.isContactAdded === true){
		  return({success: addContactResponse.isContactAdded, message : addContactResponse.message});  
		}
		else {
		  return ({success : addContactResponse.isContactAdded, message: addContactResponse.message});
		}    
}
}

async function addAddress (address, type) {
	let request = {...address, type : type, belongsTo : getCurrentUserId()};
	let response =  await fetch("http://localhost:5000/api/employee/addAddress",{
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(request)
	  })
	  if (response.ok){
		var addAddressResponse = await response.json();  
		if (addAddressResponse.isAddressAdded === true){
		  return({success: addAddressResponse.isAddressAdded, message : addAddressResponse.message});  
		}
		else {
		  return ({success : addAddressResponse.isAddressAdded, message: addAddressResponse.message});
		}    
}
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
	addContact,
	saveQualification,
	saveExperience,
        saveAcademicInfo,
        updateManageProfile,
		getEmployeeContact,
		getEmployeeAddress,
		addAddress
};

export default employeeService;
