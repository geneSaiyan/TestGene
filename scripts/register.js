//Array to use for rotation users
var rotationUsers = [];

//Rotation users object used to create the object for each user that registers
var rotationUserObject = generateRotationUserDataObject();

//Get the local storage rotation users
JSON.parse(localStorage.getItem("rotationUsers"))

//Register button click event
$("#btnRegister").click(function(){

    rotationUserObject.username = $("#username").val();
    rotationUserObject.password = $("#password").val();

    //Push the rotation User object to the 
    rotationUsers.push(rotationUserObject)
    
    localStorage.setItem("rotationUsers", JSON.stringify(rotationUsers));

})