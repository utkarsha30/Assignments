import {defaultDateDisplay,months} from "../js/services/dateConvert.js";
import{ fetchAndShowRegisteredUsers,getUserId } from "../js/services/registeredUsers.js";
import { fetchAndShow } from "../js/services/getRequest.js";
import { removeFromMeeting } from "../js/services/excuseYourself.js";
import { AddNewUser } from "../js/services/AddNewUser.js";
const dateoption = document.getElementById('date-options');
let str =`<h2>Meetings matching search criteria</h2>
<hr class="subsection-hr"/>`;
const container = document.querySelector('.meeting-matching');
const showNothing = ()=>{
    container.innerHTML = str;
}
const showMeetings = async(meetings) => {
    let str1='';
    let str2 = '';
    let str3 ='';
    let str4 ='';
    let res = '';
    let user1= '';
    let meetingId ='';
    let array = [];
    container.innerHTML = str+res;
    const registeredUsers = await fetchAndShowRegisteredUsers();
    
    //console.log('Users',registeredUsres)
    meetings.forEach(meeting=>{
        
       // console.log(defaultDateDisplay(formatDate));
        str1 =
       ` <div class="container-cards" id="meetings-card">
       <p><span class="make-title">${defaultDateDisplay(new Date(meeting.date))}</span> <span class="subheading">${meeting.startTime.hours}:${meeting.startTime.minutes}  - ${meeting.endTime.hours}: ${meeting.endTime.minutes}</span></p>
        <p class="subheading">${meeting.name}</p>
        <button class="button-excuse btn" >Excuse yourself</button>
        <hr class="subsection-hr"/>`;
    
        meeting.attendees.forEach(attendee=> {str2 += ` ${attendee.email} `});
        
        str3 =`</div>`;

        
        res +=`${str1} <p class="attendees"><span class="text-strong">Attendees:</span> ${str2} </p> ${registeredUsers} ${str3} `;
        str2='';
    });    
    container.innerHTML = str+res; 

    const addUser = document.querySelectorAll('.button-add');
    //let selectedUser = document.querySelectorAll('.select-design');
        addUser.forEach(
            (button,index )=>{
                button.addEventListener('click',function(event){
                    const btn = event.target;
                    const closestCard = btn.closest('.container-cards');
                    let selectedUser = closestCard.querySelector('.select-design');
                   const userId =getUserId(selectedUser.value);
                    const meetingId = meetings[index]._id;
                    const addParameters ='action=add_attendee&userId=';
                   let attendees= closestCard.querySelector('.attendees');
                   AddNewUser('meetings/',meetingId,addParameters,userId);
                    attendees.append(`${selectedUser.value}`);   
                })
            }   
        );

    const excuse = document.querySelectorAll('.button-excuse');
    excuse.forEach(
        (button,index)=>{
            button.addEventListener('click', function(event){
               const btn = event.target;
                const card = btn.closest('.container-cards');
               // console.log(card);
                const actionParameter = 'action=remove_attendee';
                const meeting_id =meetings[index]._id;
              removeFromMeeting('meetings/',meeting_id,actionParameter);
              card.remove();
            })
        }
    );
    
    
    
}
const fetchAndShowMeetings =async(queryParameter)=>{
    const searchParameter ='?period='+queryParameter;
    const meetingsData = await fetchAndShow('meetings',searchParameter);  
   // console.log('meetings returned data',meetingsData);
    if(meetingsData.length ===0)
        showNothing();
    showMeetings(meetingsData);  
    
    
    
};


document.addEventListener('DOMContentLoaded',function(event){
    fetchAndShowMeetings('all');
});
dateoption.addEventListener('change',showMeetingsByPeriod);
function showMeetingsByPeriod(){
    let queryParameter = dateoption.value;
  //  console.log(queryParameter);
    fetchAndShowMeetings(queryParameter);
    
}