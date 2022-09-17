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
async function getAllUsers() {
	let id = getCurrentUserId();
	let response = await fetch(`http://localhost:5000/api/user/getAllUsers`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		return await response.json();
	}
}

async function getUserSupervisor() {
    let user = getCurrentUser();
    let response = await fetch(`http://localhost:5000/api/user/getSupervisorById?superId=${user.reportsTo}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		return await response.json();
	}
}

const userService = {getSupervisors, getUserSupervisor, getAllUsers}

export default userService;