const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzaGlyc2FnYXJAZ21haWwuY29tIiwidXNlcklkIjoiNjM2ZTRmM2Q4ZmM0NTYwMDE1OTA4Y2E4IiwiaWF0IjoxNjY4MjY2NTc4LCJleHAiOjE2NjgzNTI5Nzh9.cjXAkALdrh0fRMYqR2UpDqmvDH4olvRcBJMjodxGKnM';
(async()=>{
    try{
        const response = await fetch( `https://mymeetingsapp.herokuapp.com/api/calendar?date=2020-10-28`,{
            method: 'GET',
            header:{
                'Authorization': '{{key}}'
            }
        });
        if(!response.ok){
            throw new Error(response.statusText);
        }

        const workshop = await response.json();
        console.log(workshop);
    }catch(error){
        alert(error.message);
    }    
})();