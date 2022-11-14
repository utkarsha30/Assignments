import { key } from "../calendar.js";
let user1= '';
let str1='';
let str2 = '';
let res = '';
let registeredUsers='';

const fetchAndShowRegisteredUsers =async()=>{
    try{
        const BASE_URL='https://mymeetingsapp.herokuapp.com/api/users';
        const response = await fetch(BASE_URL,{
            method: 'GET',
            headers:{
                'Authorization': key
            }
        });
        if(!response.ok){
            throw new Error(response.statusText);
        }
        registeredUsers = await response.json();
      //  registeredUsers.forEach(i=>console.log(i.email));
       // console.log(registeredUsers.length);
       return showRegisteredUsers(registeredUsers);
      
    }catch(error){
        alert(error.message);
    }    
};
const getUserId=(userEmail)=>{
  //  console.log(userEmail);
    let returnId='';
    registeredUsers.forEach(user=>{
        
        if(user.email === userEmail)
            returnId = user._id;   
    } )
    //console.log("USerID:",returnId);
    return returnId;
}
function showRegisteredUsers(registeredUsers) {
    let selectBox = document.getElementById("select-design");
    str1 =`<div>
        <select class="select-design btn" id="select-design">
                <option value="" selected>Select member</option>`;

                registeredUsers.forEach(user=> {
                    user1 += ` <option value='${user.email}'> ${user.email} </option>`});     
        str2 =`</select>
            <button class="button-add btn">Add</button>
        </div>`;

        res = `${str1} ${user1} ${str2}`;
        
        
        return res;

       
}

export{
    fetchAndShowRegisteredUsers,
    getUserId
}