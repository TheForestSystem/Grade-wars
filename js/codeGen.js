//make md5 function
function md5(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < charactersLength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// makes the join code
function makeCode(email, accountType) {
  var code = Math.floor(Math.random() * 1000000); // ex: 123456
  var hash = md5(email+accountType+code); // ex: DKrBBzNjxJsNVTqq16LjMaBSJDcZYKGaoy3qOgSm7dQ5tHGv052X7kJFjydyLY
  semiFinalCode = []
  for (var i = 0; i < 6; i++) {
    // get a random number between 0 and the length of the hash
    var random = Math.floor(Math.random() * hash.length);
    // add the random character to the array
    semiFinalCode.push(hash[random]);
  }
  return semiFinalCode.join('');
}

function sendCodes(accountType, email) {
  var emails = [];


  if (email.indexOf(',') > -1) {
    emails = email.split(',');
  } else {
    emails.push(email);
  }
  var firsrEmail = emails[0];
  var code = makeCode(firsrEmail, accountType);
  var emailAndCode = firsrEmail+'|'+code;
  var message = 'this would then email to the provided emails with the join code ex: ' + emailAndCode;
  alert(message);

}

/**
 * 
 * @param {string} email user email
 * @param {string} accountType account type
 * @returns join code
 */
function dumyCode(email, accountType) {
  var code = makeCode(email, accountType);
  return code;
}