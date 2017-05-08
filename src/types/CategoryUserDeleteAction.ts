
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserDeleteActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
}

/** 
* Delete a CategoryUser
**/
export class CategoryUserDeleteAction extends KalturaRequest<void> {

    categoryId : number;
	userId : string;

    constructor(data : CategoryUserDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryuser' },
				action : { type : 'c', default : 'delete' },
				categoryId : { type : 'n' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

