import axios from 'axios';
const getCalendar = async(selectedDate) =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/calendar?date=${selectedDate}`);
    return response.data;
}
export{
    getCalendar
}