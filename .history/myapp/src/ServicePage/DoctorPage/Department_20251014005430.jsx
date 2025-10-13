import { useLocation, useNavigate } from "react-router-dom"

export default function Department(){

    const navigate=useNavigate()
    const location=useLocation()
        if(location.pathname!=='/'){
        navigate('/',{replace:true})
      }
    return(
        <div className="pt-44">
            <p>hELLLLLLLLLLLLL</p>
        </div>
    )
}