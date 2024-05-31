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

export interface VisitRequestModelAvailability {
    date: string
    startTime: string
    endTime: string
    RealEstateId: number
    AgentId: number
}