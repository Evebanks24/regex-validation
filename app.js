//Write a simple regex to validate a username. Allowed characters are:

//lowercase letters,
//numbers,
//underscore
//Length should be between 4 and 16 characters (both included).

//Answer//

function validateUsr(username) {
    return /^[a-z_0-9]{4,16}$/.test(username) 
  }