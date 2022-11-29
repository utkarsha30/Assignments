import axios from 'axios';
const key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY5NzA4NDkwLCJleHAiOjE2Njk3OTQ4OTB9.wNHlzLRUz-AujnsPZ6CznyXgwXQZqVXOEQfwAPca9S8';
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
    console.log(meeting);
    const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/meetings`,
    
    {
        headers:{
            Authorization : key,
            'Content-Type': 'application/json'  
        },
        data:meeting
    });
    return response.data;
}
export{
    getMeetings,
    postMeeting
};