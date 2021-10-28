function generateRotationUserDataObject() {
  
    // This array houses the item IDs in the applications.
    var applications = [];

    var userDataObject = {
        "username": "",
        "password": "",
        "name": "",
        "phone": "",
        "email": "",
        "applications": applications
    };
    return userDataObject;
}
