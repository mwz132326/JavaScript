const accountId = 12312
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Las Vegas"

// accountId = 12                       this is not allowd      
accountEmail = "test@google.com"
accountPassword = 9876
accountCity = "California"
// We can declare variable without declaring it and the variable's memory will be reserved, but its now a good practice.
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use "var" because of its issues in block scope and functional scope
*/