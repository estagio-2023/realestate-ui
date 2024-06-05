export interface VisitRequestModel{
    id: number
    name: string
    email: string
    date: string
    startTime: string
    endTime: string
    confirmed: boolean
    fkRealEstateId: number
    fkAgentId: number
}