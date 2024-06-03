export interface VisitRequestModel{
    id: number,
    name: string,
    email: string
    date: string
    startTime: string
    endTime: string
    confirmed: boolean | null
    RealEstateId: number
    AgentId: number
}

export interface VisitRequestAvailabilityModel {
    date: string
    startTime: string
    endTime: string
    agentId: number
    realEstateId: number
}