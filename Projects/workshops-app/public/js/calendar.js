const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4Mjc5NzcxLCJleHAiOjE2NjgzNjYxNzF9.KeleG-z-fIyg1jFSV32Y6odYWS97U7A0jrtgi6EQZxk"; 
let str =''
const meetingSchedule = document.getElementById('meeting-3');
const showMeetings = meetings => {
    let st=''
    meetings.forEach(i=>{
       str += `<span class="text-strong">${i.name} </span>
       <hr>
       <p>Attendees: ${i.attendees} </p>`;
    }
    );
    meetingSchedule.innerHTML = str

   
}
const fetchAndShowWorkshops =async()=>{
    try{
        const response = await fetch( `https://mymeetingsapp.herokuapp.com/api/calendar?date=2022-11-13`,{
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
        
        console.log(meetings);
    }catch(error){
        alert(error.message);
    }    
};
document.addEventListener( 'DOMContentLoaded', function() {
    // on page load, we need to fetch and show
    fetchAndShowWorkshops();
});
