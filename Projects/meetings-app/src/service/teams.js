import axios from 'axios';
const key= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY5OTcxNjk0LCJleHAiOjE2NzAwNTgwOTR9.FEaXL9HXdsJSY0otEvSwjhwSDdlsP9nG83nJ0BLb_3M';
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