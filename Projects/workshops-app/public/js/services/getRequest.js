const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4NDU3MTI0LCJleHAiOjE2Njg1NDM1MjR9.bfRCAuGq3xCSTIXdrVCOze1Ltq4Sk4IS0YqnwQB9EyA";

const fetchAndShow =async(page,serachPeremeter)=>{
    try{
        let url ='';
        const BASE_URL='https://mymeetingsapp.herokuapp.com/api/';
        if(serachPeremeter )
        url = BASE_URL+page+serachPeremeter;
        else
        url = BASE_URL+page;
        
         
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