import { MyPlannings, MyPlanningsBackgroudContainer, ProfileHomeContainer, MyPlanningsHeader, MyPlanningsCardsContainer, MyPlanningsCard } from "./styles";
import { NewPlanningAndGallery } from "../newPlanningAndGalley";
import { ArrowRight } from "phosphor-react";
import MyPlanningsBackgroud from '../../../../assets/profile/backgrounds/backgroundMyPlannings.svg'
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { api } from "../../../../lib/axios";

interface IPlanning {
    _id: string,
    patientName: string,
    procedureType: string,
    procedureDetails: string,
    state: string
    createdAt: Date
}

export function ProfileHome() {
    const { loggedUser } = useContext(UserContext)
    const [listOfPlannings, setListOfPlannings] = useState([])

    useEffect(() => {
        async function fetchToApi() {
            const resolve = await api.post('/list_plannings', { userId: loggedUser.id })
            try {
                setListOfPlannings(resolve.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchToApi()
    }, [loggedUser, setListOfPlannings])
    return (
        <ProfileHomeContainer>
            <MyPlanningsBackgroudContainer src={MyPlanningsBackgroud} alt="" />
            <MyPlannings>
                <MyPlanningsHeader>
                    <h3>MEUS PLANEJAMENTOS</h3>
                    <p>Aqui estão disponíveis alguns dos planejamentos que estão ainda em aberto e também os que já foram concluídos. Para ver mais, você pode acessar a interface de "meus planejamentos" no menu lateral ou pelo botão no final da seção.</p>
                </MyPlanningsHeader>
                <MyPlanningsCardsContainer>
                    <h4>EM ABERTO</h4>
                    <MyPlanningsCard>
                        <table>
                            <thead>
                                <tr>
                                    <th>PACIENTE</th>
                                    <th>PROCEDIMENTO</th>
                                    <th>DATA DA SOLICITAÇÃO</th>
                                </tr>
                            </thead>
                            {listOfPlannings.map((planning: IPlanning) => {
                                if (planning.state === 'open' || planning.state === 'answered') {
                                    return (
                                        <tbody key={planning._id}>
                                            <tr>
                                                <td>{planning.patientName}</td>
                                                <td>{planning.procedureType}</td>
                                                <td> {new Date(planning.createdAt).toLocaleDateString('pt-BR')} <ArrowRight weight="bold" size={24} /></td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                                else return null
                            })}
                        </table>
                    </MyPlanningsCard>
                </MyPlanningsCardsContainer>
                <MyPlanningsCardsContainer>
                    <h4>CONCLUIDOS</h4>
                    <MyPlanningsCard>
                        <table>
                            <thead>
                                <tr>
                                    <th>PACIENTE</th>
                                    <th>PROCEDIMENTO</th>
                                    <th>DATA DA SOLICITAÇÃO</th>
                                </tr>
                            </thead>
                            {listOfPlannings.map((planning: IPlanning) => {
                                if (planning.state === 'finished') {
                                    return (
                                        <tbody key={planning._id}>
                                            <tr>
                                                <td>{planning.patientName}</td>
                                                <td>{planning.procedureType}</td>
                                                <td> {new Date(planning.createdAt).toLocaleDateString('pt-BR')} <ArrowRight weight="bold" size={24} /></td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                                else return null
                            })}
                        </table>
                    </MyPlanningsCard>
                </MyPlanningsCardsContainer>
                <a href="/profile/meus-planejamentos">Ver Planejamentos</a>
            </MyPlannings>
            <NewPlanningAndGallery></NewPlanningAndGallery>
        </ProfileHomeContainer>
    )
}
