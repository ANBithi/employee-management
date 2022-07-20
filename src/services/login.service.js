/// functions
function getLogingStatus(email, password) {
    if (email === 'test@test.com' && password === 'password'){
        return true;
    }
    else {
        return false;
    }
}


const loginService = {getLogingStatus}
export default loginService;