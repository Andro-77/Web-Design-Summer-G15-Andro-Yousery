



// var courses = [ "html" , "css" , "js" , "bootstrap" ]
// var searchCourses = prompt("enter your courses");
// var course = courses.find((item)=> item == courses)

// if(courses.find((item)=> item == courses)){
//     console.log("course is already exist")
// }else{
//     courses.push(searchCourses)
//     console.log("course added")
// }

// console.log(courses)

var clintData = [];

function addUser() {
var name = prompt("enter your name")
var id = Number(prompt("enter your id"))
var balance = Number(prompt("enter your balance"))

var user = {
    name: name,
    id: id,
    balance: balance,
};

clintData.push(user);
console.log("User added successfully");

}
addUser();
addUser();
console.log(clintData);



function editUserBalanceById (){

var id = Number(prompt("enter your id"))
var newBalance = Number(prompt("enter your new balance"))

var user = clintData.find(function (user) {
        return user.id === id;
    });

 if (user) {
        user.balance = newBalance;
        console.log("Balance updated successfully");
    } else {
        console.log("User not found");
    }

}

editUserBalanceById();

function transferBalance(){

var fromId = Number(prompt("Enter sender ID"))
var toId = Number(prompt("Enter receiver ID"))
var amount = Number(prompt("Enter amount"))

 var sender = clintData.find(function (user) {
        return user.id === fromId;
    });

 var receiver = clintData.find(function (user) {
        return user.id === toId;
    });

     if (!sender) {
        console.log("Sender not found");
        return;
    }

    if (!receiver) {
        console.log("Receiver not found");
        return;
    }

    if (sender.balance < amount) {
        console.log("Insufficient balance");
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    console.log("Transfer completed successfully");
console.log("Transferred amount:", amount);
console.log("Receiver balance:", receiver.balance);


}
transferBalance();

function deleteUser() {

    var id = Number(prompt("enter user id"));
    var index = users.findIndex(function (user) {
        return user.id === id;
    });

    if (index !== -1) {
        users.splice(index, 1);
        console.log("user deleted successfully");
    } else {
        console.log("user not found");
    }
}
 deleteUser();