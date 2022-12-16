export const KEY_EMAIL = 'email'
export const KEY_NAME = 'username'
export const KEY_TOKEN = 'password'
const login = async (credentials)=>{
    const data = await fetch(`https://mymeetingsapp.herokuapp.com/api/auth/login`,'POST',credentials);

    localStorage.setItem(KEY_EMAIL,data.email);
    localStorage.setItem(KEY_NAME,data.username);
    localStorage.setItem(KEY_TOKEN,data.password);
    return data;

};
export{
    login
};