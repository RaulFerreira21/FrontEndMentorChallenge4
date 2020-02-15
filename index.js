function validate(){

const email = document.getElementById("email");

email.addEventListener("keyup", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity('It expected a valid email...');
    }else if(email.value == ""){
        email.setCustomValidity('email can not be empity...');
    }else{
        email.setCustomValidity("")
    }
})
}