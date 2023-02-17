import { Menu } from "../components/menu"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { GalleryCaseContent, GalleryCasesContainer, FirstFormColumn, SecondFormColumn, DateFilterContainer, MyPlanningsCard, PlanningsList } from "./styles"
import { api } from "../../../lib/axios"
import { IPlanning } from "../../../types/IPlannings"
import { ArrowRight } from "phosphor-react"


export function GalleryCases() {
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
    const { validToken } = useContext(UserContext)
    return (
        <>
            {validToken && (
                <GalleryCasesContainer>
                    <Menu />
                    <GalleryCaseContent>
                        <form>
                            <h3>GALERIA DE CASOS</h3>
                            <p>
                                Aqui estão disponíveis todos os seus casos e os casos que estão disponíveis
                                em nosso sistema. Você pode filtrar abaixo para consultar casos específicos.
                            </p>
                            <div>
                                <span>PALAVRA CHAVE</span>
                                <input type="text" placeholder="Busque por palavras chaves nos planejamentos" />
                            </div>
                            <div>
                                <span>DATA DE CONCLUSÃO</span>
                                <DateFilterContainer>
                                    <input type="text" placeholder="Busque por palavras chaves nos planejamentos" />
                                    <p>Até</p>
                                    <input type="text" placeholder="Busque por palavras chaves nos planejamentos" />
                                </DateFilterContainer>
                            </div>
                            <div>
                                <span>DENTISTA RESPONSÁVEL</span>
                                <input type="text" placeholder="Busque por dentista especifico" />
                            </div>
                            <div>
                                        <span>TIPO DE PROCEDIMENTO</span>
                                        <select>
                                            <option value="Implante dentário" key="1">Implante Dentário</option>
                                            <option value="Extração" key="2">Extração</option>

                                        </select>
                                    </div>
                        </form>
                        <PlanningsList>
                            <h3>CASOS DISPONIVEIS</h3>
                            <MyPlanningsCard>
                            <table>
                                <thead>
                                    <tr>
                                        <th>PACIENTE</th>
                                        <th>PROCEDIMENTO</th>
                                        <th>DATA DA CONCLUSÃO</th>
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
                        </PlanningsList>
                        
                    </GalleryCaseContent>
                </GalleryCasesContainer>
            )}

        </>
    )

}