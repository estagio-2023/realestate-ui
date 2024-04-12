import { CustomerModel } from "../models/customer-management-model";

export interface CustomerManagementResponseDto {
    customers: CustomerModel[];
}