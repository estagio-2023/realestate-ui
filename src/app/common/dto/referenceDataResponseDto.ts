import { ReferenceDataModel } from "../models/reference-data-model";

export interface ReferenceDataResponseDto {
    typologies: ReferenceDataModel[];
    realEstateTypes: ReferenceDataModel[];
    cities: ReferenceDataModel[]; 
    amenities: ReferenceDataModel[]; 
}