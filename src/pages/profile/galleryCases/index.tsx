import { Menu } from "../components/menu"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { GalleryCaseContent, GalleryCasesContainer,  DateFilterContainer, MyPlanningsCard, PlanningsList } from "./styles"
import { api } from "../../../lib/axios"
import { IPlanning } from "../../../types/IPlannings"
import { ArrowRight } from "phosphor-react"
import { useForm } from 'react-hook-form'
import { SpecificPlanning } from "../MyPlannings/components/specificPlanning"
import { useFilter } from "../../../hooks/useFilter"
import { GallerySpecificPlanning } from "./components/gallerySpecficPlanning"
export interface IFilterForm {
    keyword?: string
    firstDate?: string
    secondDate?: string
    patientName?: string
    procedureType?: string
    data?: string
}


export function GalleryCases() {
    const { register, handleSubmit, watch } = useForm<IFilterForm>({
        defaultValues: {
            firstDate: '',
            keyword: '',
            procedureType: '',
            patientName: '',
            secondDate: ''
        }
    })
    const { loggedUser } = useContext(UserContext)
    const [listOfPlannings, setListOfPlannings] = useState([])
    const [filtredPlannings, setFiltredPlannings] = useState<IPlanning[]>([])
    const [isFiltred, setIsFiltred] = useState(false)
    const [showSpecificPlannning, setShowSpecificPlanning] = useState(false)
    const [specifiPlanningValue, setSpecificPlanningValues] = useState({} as IPlanning)
    useEffect(() => {
        async function fetchToApi() {
            const resolve = await api.get('/list_all_plannings')
            try {
                setListOfPlannings(resolve.data)
                console.log(listOfPlannings)
            } catch (error) {
                console.log(error)
            }
        }
        fetchToApi()
    }, [loggedUser, setListOfPlannings])
    const { validToken } = useContext(UserContext)

    function specificPlanning(planning:IPlanning){
        setSpecificPlanningValues(planning)
        setShowSpecificPlanning(true)
    }


    function filterPlannings(data: IFilterForm) {
        setIsFiltred(true)
        const filtredList = useFilter(data, listOfPlannings)
        setFiltredPlannings(filtredList)
    }

    return (
        <>
            {validToken && (
                <GalleryCasesContainer>
                    <Menu />
                        {showSpecificPlannning ?
                            (
                                <GallerySpecificPlanning specificPlanning={specifiPlanningValue}></GallerySpecificPlanning>
                            )
                            :
                            (
                                <GalleryCaseContent>
                                    <form onSubmit={handleSubmit(filterPlannings)}>
                                        <h3>GALERIA DE CASOS</h3>
                                        <p>
                                            Aqui estão disponíveis todos os seus casos e os casos que estão disponíveis
                                            em nosso sistema. Você pode filtrar abaixo para consultar casos específicos.
                                        </p>
                                        <div>
                                            <span>PALAVRA CHAVE</span>
                                            <input {...register('keyword')} type="text" placeholder="Busque por palavras chaves nos planejamentos" />
                                        </div>
                                        <div>
                                            <span>DATA DE CONCLUSÃO</span>
                                            <DateFilterContainer>
                                                <input {...register('firstDate')} type="date" placeholder="DD/MM/AAAA" />
                                                <p>Até</p>
                                                <input {...register('secondDate')} type="date" placeholder="DD/MM/AAAA" />
                                            </DateFilterContainer>
                                        </div>
                                        <div>
                                            <span>NOME DO PACIENTE</span>
                                            <input {...register('patientName')} type="text" placeholder="Busque por dentista especifico" />
                                        </div>
                                        <div>
                                            <span>TIPO DE PROCEDIMENTO</span>
                                            <select {...register('procedureType')}>
                                                <option value="Implante dentário" key="1">Implante Dentário</option>
                                                <option value="Extração" key="2">Extração</option>
                                            </select>
                                        </div>
                                        <button>Filtrar Casos</button>
                                    </form><PlanningsList>
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

                                                {filtredPlannings.length >= 0 && isFiltred ?
                                                    (
                                                        filtredPlannings.map((planning: IPlanning) => {
                                                            if (planning.state === 'finished') {
                                                                return (

                                                                    <tbody key={planning._id}>
                                                                        <tr onClick={()=>specificPlanning(planning)}>
                                                                            <td>{planning.patientName}</td>
                                                                            <td>{planning.procedureType}</td>
                                                                            <td> {new Date(planning.createdAt).toLocaleDateString('pt-BR')} <ArrowRight weight="bold" size={24} /></td>
                                                                        </tr>
                                                                    </tbody>

                                                                )
                                                            }
                                                            else
                                                                return null
                                                        })
                                                    )
                                                    :
                                                    (
                                                        listOfPlannings.map((planning: IPlanning) => {
                                                            if (planning.state === 'finished') {
                                                                return (
                                                                    <tbody key={planning._id}>
                                                                        <tr onClick={()=>specificPlanning(planning)}>
                                                                            <td>{planning.patientName}</td>
                                                                            <td>{planning.procedureType}</td>
                                                                            <td> {new Date(planning.createdAt).toLocaleDateString('pt-BR')} <ArrowRight  weight="bold" size={24} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                )
                                                            }
                                                            else
                                                                return null
                                                        })
                                                    )}
                                            </table>

                                        </MyPlanningsCard>

                                    </PlanningsList>
                                </GalleryCaseContent> 
                            )

                        }
                </GalleryCasesContainer>
            )}

        </>
    )

}