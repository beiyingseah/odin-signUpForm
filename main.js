// Application of attribute selector
const password = document.querySelectorAll('input[type="password"]');
password.forEach(password => password.addEventListener('blur',checkPasswords));

function checkPasswords(){
    if(password[0].value==password[1].value){
        password.forEach(password=>password.classList.remove('error'));
        password[0].parentNode.classList.remove('error');
    }
    else{
        password.forEach(password=>password.classList.add('error'));
        password[0].parentNode.classList.add('error')
    }
    
}