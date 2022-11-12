const datePicker = document.getElementById('date-picker');
const dayPicker = document.getElementById('day-picker');
const currentDate = new Date();
const displayDate =()=>{
     const months =['January', 'February','March','April','May', 'June', 'July','August', 'September', 'October','November','December'];;
     
     const dd = currentDate.getDate();
     const mm = months[currentDate.getMonth()];
     const yyy = currentDate.getFullYear();
     const finalDate = `${dd} ${mm} ${yyy}`;
     return finalDate;
}
datePicker.innerHTML = displayDate();

const displayDay =()=>{
    const day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    const requiredDate = currentDate.getDay();
    const dayResult= day[requiredDate];
    return dayResult;
    
}
    
   dayPicker.innerHTML = displayDay();