





var degree = prompt ("enter your degree");
if (degree == null  || degree ==""){
    alert('please enter your degree');
}
 else if (degree > 100) {
    alert('invalid degree');
}
else if (degree >= 90){
    alert('excellent');
}
else if (degree >= 80){
    alert('very good');
}
else if (degree >= 70){
    alert('good');
}
else (degree < 70){
   alert('failed');
}
