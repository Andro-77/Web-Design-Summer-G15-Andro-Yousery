





// var degree = prompt ("enter your degree");
// if (degree == null  || degree ==""){
//     alert('please enter your degree');
// }
//  else if (degree > 100) {
//     alert('invalid degree');
// }
// else if (degree >= 90){
//     alert('excellent');
// }
// else if (degree >= 80){
//     alert('very good');
// }
// else if (degree >= 70){
//     alert('good');
// }
// else (degree < 70){
//    alert('failed');
// }





// function looping(startNum , endNum , breakNum , contNum ){
//     if (startNum != null && endNum != null && breakNum != null && contNum != null)

//     for (var i = startNum; i <= endNum; i++) {

//         if (i === breakNum) {
//             break;
//         }

//         if (i === contNum) {
//             continue;
//         }

//         console.log(i);
//     } else {
//         alert 
//            ("enter all number");
//     }
// }

// looping(1 , 10 , 6 , 3);



var courses = ["html" , "css" , "js"]
var searchCourses = prompt("enter your courses");
if(courses.includes(searchCourses)){
    console.log("course is already exist")
}else{
    courses.push(searchCourses)
    console.log("course added")
}

console.log(courses);



