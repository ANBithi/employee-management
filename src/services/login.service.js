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
    return {
      success: true,
      user : {
        firstName: "Bithi",
        lastName: "Hossain",
        email: "thuru.puru@humail.com",
        role: "employee",
        reportsTo: "Shibly"
      }
    };
  }



const loginService = {isLoggedIn, logOff, logIn}
export default loginService;