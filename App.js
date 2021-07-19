function generatePassword() {
    var length = 10,
    charset = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()",
    retVal = "";
    for (var i = 0 , n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
    }
    return retVal;
}

document.getElementById("here").innerHTML = generatePassword(); 


function refreshPage(){
    window.location.reload();
} 

