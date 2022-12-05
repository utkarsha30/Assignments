import axios from 'axios';

const userLogin = async(credentials)=>{
    const response = await axios.post(`https://mymeetingsapp.herokuapp.com/api/auth/login`,credentials,
    {
        headers:{
            'Content-Type': 'application/json'  
        },
        
    });
    console.log(response.data); 
    return response.data;
    
}
export{
    userLogin
}
