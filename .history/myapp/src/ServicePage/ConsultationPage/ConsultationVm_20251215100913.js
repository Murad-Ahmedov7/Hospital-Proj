
import React from 'react'

export default function ConsultationVm() {
      const[services,setServices]=useState([])

      const{ register , handleSubmit , formState : {errors} } = useForm();
      
        const onSubmit = (data) => {
       
          sendToServer(data)
          console.log(data);
      
        };

       const sendToServer=async(data)=>{
         try {
         // 1. Mövcud data-nı GET et
         const res = await baseApi.get("/consult");
         const exists = res.data.some(c => c.email === data.email);
     
         if (exists) {
           alert("Bu email artıq mövcuddur!");
           return; // POST göndərmə
         }
     
         // 2. Əgər mövcud deyil → POST et
         await baseApi.post("/consult", data);
         alert("Form submitted!");
       } 
       catch (err) {
         console.error(err);
       }
       }
     
       useEffect(()=>{
         const resultData=async()=>{
         try{
           const res=await baseApi.get("/doctorService")
           setServices(res.data)
        
            
           console.log(res.data)
         }
         catch(err){
           console.error(err)
         }
       }
     
       resultData()
       },[])
     
     
        const valuesOfServices = services.length
        ? Object.values(services[0])
        : [];
         console.log(valuesOfServices)
      
}
