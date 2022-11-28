import axios from 'axios';
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY5NjM4MDQwLCJleHAiOjE2Njk3MjQ0NDB9.UO-allf-WocqEiBB20zpqsry-Ah9XwV8SsFLefrCvco';
const getMeetings = async(dateSelect) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/meetings?period=${dateSelect}`,
    {
        headers:{
            Authorization : key
        }
    });
    return response.data;
}
export{
    getMeetings
};