import { fetchAndShow } from "../js/services/getRequest.js";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4NDU3MTI0LCJleHAiOjE2Njg1NDM1MjR9.bfRCAuGq3xCSTIXdrVCOze1Ltq4Sk4IS0YqnwQB9EyA";

let str =''
const meetingSchedule = document.getElementById('meeting-3');
const showMeetings = meetings => {
    let str1='';
    let str2 = '';
    let res = '';
    meetings.forEach(meeting=>{
       str1 = `<span class="text-strong">${meeting.name} </span>
       <hr>`
       meeting.attendees.forEach(attendee=> {str2 += ` ${attendee.email} `});
       res += ` ${str1} <p>Attendees :${str2 }</p>  `;
      str2='';
       
    });
    meetingSchedule.innerHTML = res;

   
}
const fetchAndShowWorkshops =async(dateFilter)=>{
    
         const searchParameter = '?date='+dateFilter;
        const meetings = await fetchAndShow('calendar',searchParameter);
       
        showMeetings(meetings);
 
};
// document.addEventListener( 'DOMContentLoaded', function() {
//     // on page load, we need to fetch and show
//     fetchAndShowWorkshops();
// });
export{
    fetchAndShowWorkshops,
    key
}
