import { Menu } from "../components/menu"
import { MyPlanningsContainer, MyPlanningsContent} from './styles'
import {  useState } from "react"
import { AllPlannings } from "./components/allPlannings"
import { SpecificPlanning } from "./components/specificPlanning"
import React, {useContext} from "react"
import { UserContext } from "../../../contexts/UserContext"

interface IPlanning {
    _id: string,
    patientName: string,
    procedureType: string,
    procedureDetails: string,
    state: string
    createdAt: Date
    procedureImage?: string | string []
}

export function MyPlannings(){
    const {validToken,loggedUser} = useContext(UserContext)
    const [showAll, setShowAll] = useState(true)
    const [specificPlanning, setSpecificplanning] = useState({} as IPlanning)
    console.log(showAll)
    return (
        <MyPlanningsContainer>
        {validToken?(
            <>
                <Menu/>
                <MyPlanningsContent>
                        {showAll? (
                            <AllPlannings showAll={showAll} setShowAll={setShowAll} setSpecificplanning={setSpecificplanning}/>
                        ) : (
                            <SpecificPlanning specificPlanning={specificPlanning}/>
                        )}
                </MyPlanningsContent>
            </>
        )
           :(
                <></>
            )
    }
        </MyPlanningsContainer>
       
    )
}