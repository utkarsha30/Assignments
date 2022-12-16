import axios from 'axios';
const getMeetings = async(dateSelect,textSelect) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${dateSelect}&search=${textSelect}`);
    return response.data;
}
const postMeeting = async(meeting)=>{
    
    console.log(meeting);
    const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/meetings`,
    meeting,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
const excuseFromMeeting = async(meetingId)=>{
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/${meetingId}?action=remove_attendee`,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
const addAttendee = async(meetingId,attendeeId)=>{
   
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/meetings/${meetingId}?action=add_attendee&userId=${attendeeId}`,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
export{
    getMeetings,
    postMeeting,
    excuseFromMeeting,
    addAttendee
};