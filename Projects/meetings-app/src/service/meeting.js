import axios from 'axios';
const getMeetings = async(dateSelect) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${dateSelect}`);
    return response.data;
}
const postMeeting = async(meeting)=>{
    /*console.log(meeting);
    const req = {
        method: 'post',
        url: `https://mymeetingsapp.herokuapp.com/api/meetings`,
        headers: {
            Authorization: key,
            'Content-Type': 'application/json',
        },
        data: meeting
    };
    try {
        const val = await axios(req);
        console.log(val.data);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }*/
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