import { getCurrentUser, getCurrentUserId } from "../Helpers/userHelper";

async function getSupervisors() {
	let response = await fetch("http://localhost:5000/api/user/getAll", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		let allUsers = await response.json();
		return allUsers;
	}
}
async function applyLeave(leaveApplication) {
	const { leaveData, leaveType, supervisor, reason } = leaveApplication;
    

	let request = { ...leaveData, leaveType, supervisor,reason , belongsTo: getCurrentUserId() };
    console.log(request);
	let response = await fetch("http://localhost:5000/api/leave/apply", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(request),
	});
	if (response.ok) {
		return await response.json();
	}
}

async function getAppliedLeaveStatusData() {
    let belongsTo = getCurrentUserId();
      let response =  await fetch(`http://localhost:5000/api/leave/appliedStatus?belongsTo=${belongsTo}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		let JsonResponse = await response.json(); 
		return JsonResponse;
		}    
}

const leaveService = { getSupervisors, applyLeave, getAppliedLeaveStatusData };
export default leaveService;
