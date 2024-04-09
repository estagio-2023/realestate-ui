import { ReferenceDataModel } from "../models/reference-data-model";

export interface RefrenceDataResponseDto {
    typologies: ReferenceDataModel[];
    realestateTypes: ReferenceDataModel[];
    cities: ReferenceDataModel[]; 
    amenities: ReferenceDataModel[]; 
}