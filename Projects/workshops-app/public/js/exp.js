import { fetchAndShowWorkshops } from "../js/calendar.js";
import {defaultDateDisplay,months} from "../js/services/dateConvert.js";
const datePicker = document.getElementById('date-picker');
const dayPicker = document.getElementById('day-picker');
const customDatePicker = document.getElementById('date-select');
const currentDate = new Date();
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


//fetching date from left side to show in date input 
const getDate = (setDate) =>{
    const dd= setDate.getDate();
    const mm = setDate.getMonth()+1;
    const yyy = setDate.getFullYear();
    const finalDate = `${yyy}-${mm}-${dd}`;
    return finalDate;
}
//console.log(getDate);
const dayDisplay = (setDay) =>{    
    const requiredDate = setDay.getDay();
   // console.log(requiredDate); 
    const dayResult= day[requiredDate];
   // console.log(dayResult);
    return dayResult;
}

document.addEventListener('DOMContentLoaded',function(){
    datePicker.innerHTML = defaultDateDisplay(currentDate);
    dayPicker.innerHTML = dayDisplay(currentDate);
    customDatePicker.value = getDate(currentDate);
    fetchAndShowWorkshops(getDate(currentDate));
    
})

customDatePicker.addEventListener('change',setDate);
  
function setDate(){
    let newDate =new Date(customDatePicker.value);
    datePicker.innerHTML = defaultDateDisplay(newDate);
    dayPicker.innerHTML = dayDisplay(newDate);
    const dateFilter = getDate(newDate);
    console.log(dateFilter);
   fetchAndShowWorkshops(dateFilter);
}



