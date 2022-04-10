//Accessing the dom by form name and element
const register_name = document.register.name;
const email = document.register.email;
const user_name = document.register.uname;
const password = document.register.password;
const confirm_password = document.register.password2;

//Displaying errors picked from id of error element in form
const register_name_error = document.getElementById('fName');
const email_error = document.getElementById('email');
const user_name_error = document.getElementById('uName');
const password_error = document.getElementById('pwd');
const confirm_password_error = document.getElementById('pwd2');

//Adding event listeners to the declared constants
register_name.addEventListener('blur', register_name_verify, true);
email.addEventListener('blur', email_verify, true);
user_name.addEventListener('blur', user_name_verify, true);
password.addEventListener('blur', password_verify, true);
confirm_password.addEventListener('blur', confirm_password_verify, true);

//get value for input variables used to access the DOM
//register_nameValue = register_name.value;
//emailValue = email.value;
//user_nameValue = user_name.value;
//passwordValue = password.value;
//confirm_passwordValue = confirm_password.value;



//Validations
function Validate(){
    //Register name validation, checking if its empty
    if(register_name.value ==='')
    {
        register_name_error.textContent = 'Your name is required';
        register_name.border = '1px solid red';
        register_name.focus();
        return false;
    }
   
    //Email validation
    if(email.value ===''){
        email_error.textContent = 'Email is required';
        email.border = '1px solid red';
        email.focus();
        return false;
    }
    
    //User name validation
    if(user_name.value ===''){
        user_name_error.textContent = 'User Name is required';
        user_name.border = '1px solid red';
        user_name.focus();
        return false;
    }

    //Password validation
    if(password.value ===''){
        password_error.textContent = 'Password is required';
        password.border = '1px solid red';
        password.focus();
        return false;
    }

    //Password confirmation validation
    if(confirm_password.value ===''){
        confirm_password_error.textContent = 'Please confirm password';
        confirm_password.border = '1px solid red';
        confirm_password.focus();
        return false;
    }
   

}

//regex
const nameRegex = /^.{5,50}[a-zA-Z]+$/; // for names btn (5-50)
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'

//Event handlers for correct data

//Register name
function register_name_verify(){
    if(register_name.value !='' && register_name.value.match(nameRegex)){
        register_name.style.border ='1px solid green';
        register_name_error.innerHTML = '';
        return true;
    }
    else{
        register_name.style.border = '1px solid red';
        register_name_error.textContent = 'Your name should be between 5-50 characters'
        register_name.focus();
        return false;
    }
}

//Email
 function email_verify(){
    if(email.value !='' && email.value.match(emailRegex)){
        email.style.border ='1px solid green';
        email_error.innerHTML = '';
        return true;
    }
    else{
        email.style.border = '1px solid red';
        email_error.textContent = 'email shoud have "@"'
        email.focus();
       return false;
    }
}

//User name
function user_name_verify(){
    if(user_name.value !='' && user_name.value.match(nameRegex)){
        user_name.style.border ='1px solid green';
        user_name_error.innerHTML = '';
        return true;
    }
    else{
        user_name.style.border = '1px solid red';
        user_name_error.textContent = 'Your name should be between 5-50 characters'
        user_name.focus();
        return false;
    }
}

//password
function password_verify(){
    if(password.value !='' && password.value.match(passwordRegex)){
        password.style.border ='1px solid green';
        password_error.innerHTML = '';
        return true;
    }
    else{
        password.style.border = '1px solid red';
        password_error.textContent = 'Minimum eight characters, at least one letter and one number'
        password.focus();
       return false;
    }
}