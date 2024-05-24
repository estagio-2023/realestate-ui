export interface VisitRequestModel{
    id: number,
    name: string,
    email: string
    date: string
    startTime: Date
    endTime: Date
    confirmed: boolean
    fkRealEstateId: number
    fkAgentId: number
}