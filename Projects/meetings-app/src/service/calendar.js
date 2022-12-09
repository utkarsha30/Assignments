import axios from 'axios';
const getCalendar = async() =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=2022-11-13`);
    return response.data;
}
export{
    getCalendar
}