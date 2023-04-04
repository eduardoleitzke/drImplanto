import { add, isAfter, isBefore } from "date-fns"
import { IFilterForm } from "../pages/profile/galleryCases"
import { IPlanning } from "../types/IPlannings"

export function useFilter(data: IFilterForm, list:IPlanning[]){
        let dataParams: IFilterForm = {}
        for (var k in data) {
            console.log(data)
            if (data !== '')  dataParams[k] = data[k]
        }
        const filtred = list.filter((planning: IPlanning) => {
            if ((dataParams.firstDate !== undefined && dataParams.secondDate !== undefined)) {
                const searchFirstDate = new Date(`${dataParams.firstDate} 00:00:00 `)
                const searchSecondDate = new Date(`${dataParams.secondDate} 00:00:00 `)
                const searchSecondDateOneDayMore = add(searchSecondDate, { days: 1 })
                const planningDate = new Date(planning.createdAt)
                const dateAfter = isAfter(searchFirstDate, planningDate)
                const dateBefore = isBefore(planningDate, searchSecondDateOneDayMore)
                if (!(!dateAfter && dateBefore)) {
                    return
                }
            }
            if (dataParams.keyword !== undefined) {
                if (!(planning.procedureDetails.search(dataParams.keyword) !== -1)) return
            }
            if (dataParams.patientName !== undefined) {
                if (!(planning.patientName.search(dataParams.patientName) !== -1)) return
            }
            if (dataParams.procedureType !== undefined) {
                if (!(planning.procedureType.search(dataParams.procedureType) !== -1)) return
            }
            return planning
        })
        return filtred
   
}