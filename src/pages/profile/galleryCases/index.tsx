import { Menu } from "../components/menu"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { GalleryCaseContent, GalleryCasesContainer, FirstFormColumn, SecondFormColumn, DateFilterContainer, MyPlanningsCard, PlanningsList } from "./styles"
import { api } from "../../../lib/axios"
import { IPlanning } from "../../../types/IPlannings"
import { ArrowRight } from "phosphor-react"
import { useForm } from 'react-hook-form'

interface IFilterForm {
    keyword?: string
    firstDate?: string
    secondDate?: string
    patientName?: string
    procedureType?: string
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
    const filterParams: string[] = []
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

    function filterPlannings(data: IFilterForm) {
        let dataParams:IFilterForm = {}
        for (var k in data) {
            if (data[k] !== '')
                dataParams[k] = data[k]
        }
        let haveSearch = false
        const filtred =  listOfPlannings.filter((planning:IPlanning)=>{
          if(dataParams.firstDate !== undefined && dataParams.secondDate === undefined){
            const searchDate = new Date(dataParams.firstDate)
            const today = new Date()
            function compareDatas() {
                let date1 = new Date(searchDate).getTime();
                let date2 = today.getTime();
                console.log('date 1: - ' + date1)
                console.log('date 2: - ' + date2)
                if (date1 > date2) {
                  console.log(`${searchDate} is less than ${today}`);
                } else if (date1 < date2) {
                  console.log(`${searchDate} is greater than ${today}`);
                } else {
                  console.log(`Both dates are equal`);
                }
              };
              compareDatas()
          } 
            
          if(dataParams.keyword !== undefined){
            if(planning.procedureDetails.search(dataParams.keyword) !== -1){
                haveSearch = true
            }
            else return
          }
          if(dataParams.patientName!== undefined){
            if(planning.patientName.search(dataParams.patientName) !== -1){
                haveSearch = true
            }
            else return
          }
          if(dataParams.procedureType !== undefined){
            if(planning.procedureType.search(dataParams.procedureType) !== -1){
                haveSearch = true
            }
            else return
          }
         
          return planning
        
             
             
        })
            console.log(filtred)
    }

    return (
        <>
            {validToken && (
                <GalleryCasesContainer>
                    <Menu />
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