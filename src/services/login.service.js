/// functions
function isLoggedIn() {
   let loggedIn = localStorage.getItem("loging-status");
    return JSON.parse(loggedIn);
    }
function logOff() {
  localStorage.setItem("loging-status", false);
}

function logIn(user) {
    localStorage.setItem("loging-status", true);
    return true;
  }



const loginService = {isLoggedIn, logOff, logIn}
export default loginService;