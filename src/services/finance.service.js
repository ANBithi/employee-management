

async function getFinanceMonthly(belongsTo) {
      let response =  await fetch(`http://localhost:5000/api/finance/GetCurrentMonth?belongsTo=${belongsTo}`,{
		method: "GET",
		headers: {'Content-Type': 'application/json'}		
	  })
	  if (response.ok){
		let JsonResponse = await response.json(); 
		return JsonResponse;
		}    
}

const financeService = { getFinanceMonthly};
export default financeService;