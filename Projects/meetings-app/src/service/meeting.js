import axios from 'axios';
const getMeetings = async(dateSelect) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${dateSelect}`);
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
export{
    getMeetings,
    postMeeting
};