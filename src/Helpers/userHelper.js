
const getCurrentUser = () =>
{
 let user = JSON.parse(localStorage.getItem("userDetails"));
 return user;
}


const getCurrentUserId = () =>
{
 let user = getCurrentUser();
 return user.id;
}

export {getCurrentUser, getCurrentUserId}