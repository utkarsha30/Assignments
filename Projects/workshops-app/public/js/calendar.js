

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4MzY4OTg1LCJleHAiOjE2Njg0NTUzODV9.EzK0l-BiSd9KAX18MMF0HXbsG3PFgyV18abmdHkPPJI";
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
    try{
        const BASE_URL='https://mymeetingsapp.herokuapp.com/api/calendar';
         const url = BASE_URL+'?date='+dateFilter;

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
       
        showMeetings(meetings);
        
      
          
       // console.log(meetings);
    }catch(error){
        alert(error.message);
    }    
};
// document.addEventListener( 'DOMContentLoaded', function() {
//     // on page load, we need to fetch and show
//     fetchAndShowWorkshops();
// });
export{
    fetchAndShowWorkshops,
    key
}
