import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Department(){

    const navigate=useNavigate()

    useEffect(()=>{
        const location=useLocation()
        if(location.pathname!=='/'){
        navigate('/',{replace:true})
      }
    },[lo])
    return(
        <div className="pt-44">
            <p>hELLLLLLLLLLLLL</p>
        </div>
    )
}