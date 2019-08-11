export default function(user={}, action) {
    if(action.type == 'setUserData') {
        console.log("ACTION REDUCER ===>",action)
        var userCopy = {
            ...user,
            first_name: action.first_name,
            last_name: action.last_name,
            email: action.email,
            token: action.token,
          }
          return userCopy;
        } else {
          console.log("ERREUR");
          return user;
        }
      }