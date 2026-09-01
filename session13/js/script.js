

var myForm = document.querySelector('#myForm');
var users = []
myForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    console.log(e)
    console.log(e.target.elements.email.value)
    console.log(e.target.elements.name.value)
    var user = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
    }
    users.push(user)
    console.table(users)
})



var form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var h4 = document.createElement('h4');

    h3.innerText = name;
    h4.innerText = email;

    div.appendChild(h3);
    div.appendChild(h4);

    div.classList.add('alert', 'alert-primary');

    var divContainer = document.getElementById('divContainer');

    divContainer.appendChild(div);

    console.log(div);
    console.log(h3);
    console.log(h4);
});





var image = document.getElementById('myImage');
var button = document.getElementById('changeBtn');

var images = [
    'images/paris-louvre.jpg',
    'images/paris-rue-cremieux.jpg'
];

var index = 0;

button.addEventListener('click', function () {

    index++;

    if (index === images.length) {
        index = 0;
    }

    image.src = images[index];
});



