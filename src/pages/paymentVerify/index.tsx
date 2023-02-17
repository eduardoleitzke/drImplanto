import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function PaymentVerify(){
    
    const [idValue, setIdValue] = useState('')

    // useEffect(()=>{
    //     let {id} = useParams()
    //     console.log(id)
    //     setIdValue(id)
    // }, [setIdValue])

    return(
        <h3>{idValue}</h3>
        )
}