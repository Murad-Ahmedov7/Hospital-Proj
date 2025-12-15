
import React from 'react'

export default function ConsultationVm() {
      const[services,setServices]=useState([])

      const{ register , handleSubmit , formState : {errors} } = useForm();
      
        const onSubmit = (data) => {
       
          sendToServer(data)
          console.log(data);
      
        };
      
}
