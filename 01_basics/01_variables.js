const accountId = 144553
let accountEmail = "rajdeepjava@google.com"
var accountPassword = "12345"
accountCity = "Ranchi"

// accountId = 2 // not allowed

accountEmail = "rk@gmail.com"
accountPassword = "264564564654"
accountCity = "Kolkata"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword, accountCity])

/*
Pefer not to use var because of issue in block scope 
and functional scope
*/
