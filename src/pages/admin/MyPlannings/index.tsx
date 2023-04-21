import { Menu } from "../components/Menu"
import { MyPlanningsContainer, MyPlanningsContent } from './styles'
import { useState, useEffect } from "react"
import { AllPlannings } from "./components/allPlannings"
import { SpecificPlanning } from "./components/specificPlanning"
import { useContext } from "react"
import { AdminContext } from "../../../contexts/AdminContext"
import { api } from "../../../lib/axios"

interface IPlanning {
    _id: string,
    patientName: string,
    procedureType: string,
    procedureDetails: string,
    state: string
    createdAt: Date
    procedureImage?: string | string[]
}

export function AdminMyPlannings() {
    const { validToken } = useContext(AdminContext)
    const [showAll, setShowAll] = useState(true)
    const [specificPlanning, setSpecificplanning] = useState({} as IPlanning)

    useEffect(()=>{
        async function fetchAllUsers(){
            const resolve = await api.get('/list_users')
            console.log(resolve.data)
        }
        fetchAllUsers()
    }, [])
    return (
        <MyPlanningsContainer>
            {validToken && (
                <>
                    <Menu />
                    <MyPlanningsContent>
                        {showAll ? (
                            <AllPlannings showAll={showAll} setShowAll={setShowAll} setSpecificplanning={setSpecificplanning} />
                        ) : (
                            <SpecificPlanning specificPlanning={specificPlanning} />
                        )}
                    </MyPlanningsContent>
                </>
            )
            }
        </MyPlanningsContainer>

    )
}