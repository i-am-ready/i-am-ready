/* tslint:disable */

import { TenantData } from './tenant-data';


export interface Item extends TenantData {


    active: boolean;
    

    activeFrom?: Date;
    

    activeTo?: Date;
    

    deleted: boolean;
    

    description?: string;
    

    dosageForm?: string;
    

    duration?: number;
    

    manufacturer?: string;
    

    name: string;
    

    quantity?: string;
    

    tariffItemId: string;
    

    unitPrice: number;
    

    vatCode?: string;
    
}


