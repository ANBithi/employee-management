
async function addHolidays (date) {
	let response =  await fetch("http://localhost:5000/api/company/addHoliday",{
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify(date)
	  })
	  if (response.ok) {
		return await response.json();
	}
}

async function getHolidays (){
    let response = await fetch(`http://localhost:5000/api/company/getHolidays`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		return await response.json();
	}
}

const CompanyService = {getHolidays, addHolidays}
export default CompanyService;