export interface PropertyHeader {
    id: number,
    title: string,
    cityId: number,
    typologyId: number
}

export interface PropertyBody {
    id: number,
    title: string,
    address: string,
    zipCode: string,
    description: string,
    build_Date: string,
    price: number,
    squareMeter: number,
    energyClass: string,
    customerId: number,
    agentId: number,
    realEstateTypeId: number,
    cityId: number,
    typologyId: number
}