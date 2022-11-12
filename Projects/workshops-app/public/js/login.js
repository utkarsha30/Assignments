import {login} from '../services/auth.js';
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const loginForm = document.getElementById('login-from');

bindListeners = ()=>{
    loginForm.addEventListener('submit',async function(event){
        event.preventDefault();

        const credentials={
            email: emailEl.value.trim(),
            password : passwordEl.value.trim()
        };
  
    await login(credentials);
    console.log('Success');
    window.location.href = '/';
});
};



document.addEventListener('DOMContentLoaded',function(){
    bindListeners();
})