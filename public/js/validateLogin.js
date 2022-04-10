//Accessing the dom by form name and element
const user_name = document.register.uname;
const password = document.register.password;
 
//Displaying errors picked from id of error element in form
const user_name_error = document.getElementById('usname');
const password_error = document.getElementById('uspass');

//Adding event listeners to the declared constants
user_name.addEventListener('blur', user_name_verify, true);
password.addEventListener('blur', password_verify, true);

//Get value for input variables used to access the DOM
// user_nameValue = user_name.value;
// passwordValue = password.value;

//Validations
function Validate(){
    
    //User name validation
    if(user_name.value ===''){
        user_name_error.textContent = 'User Name is required';
        user_name.border = '1px solid red';
        user_name.focus();
        return false;
    }
    //password validation
    if(password.value ===''){
        password_error.textContent = 'Password is required';
        password.border = '1px solid red';
        password.focus();
        return false;
    }
   
}

//regex
const nameRegex = /^.{5,20}[a-zA-Z]+$/; // for names btn (5-20)
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:

//event handlers for correct data

//User name
function user_name_verify(){
    if(user_name.value !='' && user_name.value.match(nameRegex)){
        user_name.style.border ='1px solid green';
        user_name_error.innerHTML = '';
        return true;
    }
    else{
        first_name.style.border = '1px solid red';
        first_name_error.textContent = 'User name should be between 5-20 characters'
       first_name.focus();
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

