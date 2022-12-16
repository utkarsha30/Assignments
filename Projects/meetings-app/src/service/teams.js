import axios from 'axios';

const getTeams = async() =>{
    const response = await axios.get(`https://mymeetingsapp.herokuapp.com/api/teams`);
    return response.data;
}
const postTeams = async(teamsDetails)=>{
    console.log('service',teamsDetails);
    const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/teams`,teamsDetails,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
const excuseFromTeams = async(teamId)=>{
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/teams/${teamId}?action=remove_member`,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
const addAttendee = async(teamId,attendeeId)=>{
    console.log(teamId,attendeeId);
    const response = await axios.patch(`https://mymeetingsapp.herokuapp.com/api/teams/${teamId}?action=add_member&userId=${attendeeId}`,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    return response.data;
}
export{
    getTeams,
    postTeams,
    excuseFromTeams,
    addAttendee
}