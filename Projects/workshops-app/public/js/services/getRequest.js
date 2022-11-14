const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4MzY4OTg1LCJleHAiOjE2Njg0NTUzODV9.EzK0l-BiSd9KAX18MMF0HXbsG3PFgyV18abmdHkPPJI";

const fetchAndShow =async(page,serachPeremeter)=>{
    try{
        const BASE_URL='https://mymeetingsapp.herokuapp.com/api/';
         const url = BASE_URL+page+'?'+serachPeremeter;
//console.log('url',url);
        const response = await fetch(url,{
            method: 'GET',
            headers:{
                'Authorization': key
            }
        });
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const data = await response.json();
     //  console.log('data',data);
     return data;

    }catch(error){
        alert(error.message);
    }    
};

export{
    fetchAndShow
}