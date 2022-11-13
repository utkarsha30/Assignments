import { key } from "../js/calendar.js";
import {defaultDateDisplay,months} from "../js/services/dateConvert.js";
const dateoption = document.getElementById('date-options');
let str =''
const container = document.querySelector('.meeting-matching');

const showMeetings = meetings => {
    let str1='';
    let str2 = '';
    let str3 ='';
    let res = '';
    meetings.forEach(meeting=>{
        
       // console.log(defaultDateDisplay(formatDate));
        str1 =
       ` <div class="container-cards" id="meetings-card">
       <p><span class="make-title">${defaultDateDisplay(new Date(meeting.date))}</span> <span class="subheading">${meeting.startTime.hours}:${meeting.startTime.minutes}  - ${meeting.endTime.hours}: ${meeting.endTime.minutes}</span></p>
        <p class="subheading">${meeting.name}</p>
        <button class="button-excuse btn">Excuse yourself</button>
        <hr class="subsection-hr"/>`;
        
        meeting.attendees.forEach(attendee=> {str2 += ` ${attendee.email} `});
        str3 =`<div>
            <select class="select-design btn">
                <option vlaue="" selected>Select member</option>
                <option vlaue="utkarsha@gmail.com">utkarsha@gmail.com</option>
                <option vlaue="mansi@gmail.com">mansi@gmail.com</option>
                <option vlaue="juee@gmail.com">juee@gmail.com</option>
                <option vlaue="prachi@gmail.com">prachi@gmail.com</option>
            </select>
            <button class="button-add btn">Add</button>
        </div>
        </div>`;
        res +=`${str1} <p><span class="text-strong">Attendees:</span> ${str2} </p> ${str3}`;
        str2='';
    });
    container.innerHTML += res;

   
}
const fetchAndShowWorkshops =async(queryParameter)=>{
    try{
        const BASE_URL='https://mymeetingsapp.herokuapp.com/api/meetings';
         const url = BASE_URL+'?period='+queryParameter;

        const response = await fetch(url,{
            method: 'GET',
            headers:{
                'Authorization': key
            }
        });
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const meetings = await response.json();
       // meetings.forEach(i=>console.log(i.date));
       
        showMeetings(meetings);
        
    
          
       // console.log(meetings);
    }catch(error){
        alert(error.message);
    }    
};

document.addEventListener('DOMContentLoaded',function(){
    const queryParameter = dateoption.value;
    fetchAndShowWorkshops(queryParameter);
});