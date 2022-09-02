import { getCurrentUserId, getCurrentUser } from "../Helpers/userHelper";

async function getSupervisors() {
	let id = getCurrentUserId();
	let response = await fetch(`http://localhost:5000/api/user/getSupervisors?id=${id}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		let JsonResponse = await response.json(); 
		return JsonResponse;
	}
}
async function getSupervisorById() {
    let user = getCurrentUser();
    let response = await fetch(`http://localhost:5000/api/user/getSupervisors?id=${user.reportsTo}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		let JsonResponse = await response.json(); 
		return JsonResponse;
	}
}

const userService = {getSupervisors, getSupervisorById}

export default userService;