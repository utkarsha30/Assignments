import axios from 'axios';
const key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY5ODQwNzEwLCJleHAiOjE2Njk5MjcxMTB9.WZvQS7JNYKHwAwokZ2qbeBLw3C3EBrr30pN4hhMQ2I8';
const getTeams = async() =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/teams`,
    {
        headers:{
            Authorization : key
        }
    });
    return response.data;
}

export{
    getTeams
}