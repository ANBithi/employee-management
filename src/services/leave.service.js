function getSupervisors(){
    let supervisors = [{ name: "Amin", id: "12320ed2h3" }];
      
    return supervisors
}
function saveLeaveApplication(leaveApplication){
return true;
}

function getAppliedLeaveStatusData(){
let data = [{
    employeeName : "Bithi",
    supervisorName : "Amin",
    reason: "Headache.",
    startDate: "12/07/22",
    endDate: "13/07/22",
    numberOfDays: 1,
},
{
    employeeName : "Shibly",
    supervisorName : "Balam",
    reason: "Fever.",
    startDate: "14/07/22",
    endDate: "16/07/22",
    numberOfDays: 2,
}];
return data
}

const leaveService = {getSupervisors, saveLeaveApplication,getAppliedLeaveStatusData}
export default leaveService;