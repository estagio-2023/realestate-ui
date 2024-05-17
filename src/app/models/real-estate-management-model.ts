export interface RealEstateHeader {
    id: number,
    title: string,
    cityId: number,
    typologyId: number
}

export interface RealEstateBody {
    id: number,
    title: string,
    address: string,
    zipCode: string,
    description: string,
    buildDate: string,
    price: number,
    squareMeter: number,
    energyClass: string,
    customerId: number,
    agentId: number,
    realEstateTypeId: number,
    cityId: number,
    typologyId: number
}