const months =['January', 'February','March','April','May', 'June', 'July','August', 'September', 'October','November','December'];  

const defaultDateDisplay =(setDate) => {
    const dd = setDate.getDate();
    const mm = months[setDate.getMonth()];
    const yyy = setDate.getFullYear();
    const finalDate = `${dd} ${mm} ${yyy}`;
    return finalDate;
}
export{
    defaultDateDisplay,
    months
}