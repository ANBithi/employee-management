import { getCurrentUserId } from "../Helpers/userHelper";

async function entryWorkHours(entryObj) {
	var { date, hours, days } = entryObj;
	date = new Date(date);
	if (hours === undefined || hours === null) {
		hours = 0;
	} else {
		hours = parseInt(hours);
	}
	if (days === undefined || days === null) {
		days = 0;
	} else {
		days = parseInt(days);
	}

	let request = { ...entryObj, date, hours, days, belongsTo: getCurrentUserId() };
	console.log(request);
	let response = await fetch("http://localhost:5000/api/workbook/entry", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(request),
	});
	if (response.ok) {
		return await response.json();
	}
}

async function getWorkBookData() {
    let belongsTo = getCurrentUserId();
      let response =  await fetch(`http://localhost:5000/api/workbook/entriedData?belongsTo=${belongsTo}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		let JsonResponse = await response.json(); 
		return JsonResponse;
		}    
}

async function getTotalHours(belongsTo) {
      let response =  await fetch(`http://localhost:5000/api/workbook/getTotalHours?belongsTo=${belongsTo}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		let JsonResponse = await response.json(); 
		return JsonResponse;
		}    
}

async function getTotalWorkDays(belongsTo) {
	let response =  await fetch(`http://localhost:5000/api/workbook/getTotalWorkDays?belongsTo=${belongsTo}`,{
	  method: "GET",
	  headers: {'Content-Type': 'application/json'}		
	})
	if (response.ok){
	  let JsonResponse = await response.json(); 
	  return JsonResponse;
	  }    
}

const workBookService = { entryWorkHours,getWorkBookData,getTotalHours, getTotalWorkDays };
export default workBookService;
