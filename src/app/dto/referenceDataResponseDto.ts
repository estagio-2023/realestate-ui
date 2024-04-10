import { ReferenceDataModel } from "../models/reference-data-model";

export interface ReferenceDataResponseDto {
    typologies: ReferenceDataModel[];
    realestateTypes: ReferenceDataModel[];
    cities: ReferenceDataModel[];
    amenities: ReferenceDataModel[];
}