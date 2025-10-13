import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Department(){

    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{
        
        if(location.pathname!=='/'){
        navigate('/',{replace:true})
      }
    },[location.pathname])
    return(
        <div className="pt-44">
            <p>hELLLLLLLLLLLLL</p>
        </div>
    )
}