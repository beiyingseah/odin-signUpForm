const pass=document.querySelectorAll('input[type="password"]');
pass.forEach(pass=>pass.addEventListener('blur',checkPasswords));

function checkPasswords(){
    if(pass[0].value==pass[1].value){
        pass.forEach(pass=>pass.classList.remove('error'));
        pass[0].parentNode.classList.remove('error');
    }
    else{
        pass.forEach(pass=>pass.classList.add('error'));
        pass[0].parentNode.classList.add('error')
    }
    
}