const datePicker = document.getElementById('date-picker');
const dayPicker = document.getElementById('day-picker');
const customDatePicker = document.getElementById('date-select');
const currentDate = new Date();
const months =['January', 'February','March','April','May', 'June', 'July','August', 'September', 'October','November','December'];  
const day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const defaultDateDisplay =(setDate) => {
    const dd = setDate.getDate();
    const mm = months[setDate.getMonth()];
    const yyy = setDate.getFullYear();
    const finalDate = `${dd} ${mm} ${yyy}`;
    return finalDate;
}
//fetching date from left side to show in date input 
const getDate = (setDate) =>{
    const dd= setDate.getDate();
    const mm = setDate.getMonth()+1;
    const yyy = setDate.getFullYear();
    const finalDate = `${yyy}-${mm}-${dd}`;
    return finalDate;
}

const dayDisplay = (setDay) =>{    
    const requiredDate = setDay.getDay(); 
    const dayResult= day[requiredDate-1];
    console.log(dayResult);
    return dayResult;
}

document.addEventListener('DOMContentLoaded',function(){
    datePicker.innerHTML = defaultDateDisplay(currentDate);
    dayPicker.innerHTML = dayDisplay(currentDate);
    customDatePicker.value = getDate(currentDate);
})

customDatePicker.addEventListener('change',setDate);
  
function setDate(){
    let newDate =new Date(customDatePicker.value);
    datePicker.innerHTML = defaultDateDisplay(newDate);
    dayPicker.innerHTML = dayDisplay(newDate);
}


