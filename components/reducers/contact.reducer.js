export default function(contactList=[], action) {
    if(action.type == 'addcontact') {
        console.log("ACTION REDUCER ===>",action)
        var contactListCopy = [...contactList];
 // Mise en place instructions permettant de vérifier si un contact n’est pas déjà présent dans l’état du store.
        var isContactExist=false;

        for (var i = 0; i < contactListCopy.length; i++) {
            if (contactListCopy[i].email === action.email) {
                isContactExist = true;
              return contactList;
            }
          }

        if (!isContactExist){

        var colorNbr = Math.random();
        var color;
        if (colorNbr < 0.25) {
          color = '#e67e22';
        } else if (colorNbr < 0.5) {
          color = '#3498db';
        } else if (colorNbr < 0.75) {
          color = '#16a085';
        } else {
          color = '#e74c3c';
        };

        contactListCopy.push({
            last_name: action.last_name,
            first_name: action.first_name,
            email: action.email,
            company_name: action.company_name,
            color:color,
          });

          return contactListCopy;
        }
        } else {
        return contactList;
      }
  }