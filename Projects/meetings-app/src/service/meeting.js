import axios from 'axios';
const key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY5NzU1MjY5LCJleHAiOjE2Njk4NDE2Njl9.pUC0CsSNh8vTsoapSbvzBLS_lVYQgV053de3-OOM1XA';
const getMeetings = async(dateSelect) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${dateSelect}`,
    {
        headers:{
            Authorization : key
        }
    });
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
            Authorization : key,
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
export{
    getMeetings,
    postMeeting
};