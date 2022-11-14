import {fetchAndShow} from "../js/services/getRequest.js";
import{ fetchAndShowRegisteredUsers,getUserId } from "../js/services/registeredUsers.js";
let str1='';
let str2 ='';
let str3 = '';
let res = '';
const container = document.querySelector('.container')
const viewTeams = async(teams)=>{
    const registeredUsers = await fetchAndShowRegisteredUsers();
    
    teams.forEach(team=>{
        str1 = `<div class="container-cards" >
        <h2>${team.name}</h2>
        <h3>${team.shortName}</h3>
        <p class="subheading">${team.description}</p>
        <button class="button-excuse btn">Excuse yourself</button>
        <hr class="subsection-hr">`;
        
        team.members.forEach(member=>str2 +=` ${member.email}`);
       
        
        res += `${str1} <p><span class="text-strong">Members:</span>${str2}</p> ${registeredUsers}</div>`;
        
        str2=''; 
    });
    container.innerHTML = res+container.innerHTML;

}
document.addEventListener('DOMContentLoaded',async function(){
    const teams = await fetchAndShow('teams');
    teams.forEach(team=>console.log(team.name));
    viewTeams(teams);
    
})